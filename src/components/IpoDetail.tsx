import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Timeline from "./Timeline";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { formatAmount, getStartEndDate } from "../util";
import { useNavigate, useParams } from "react-router-dom";
import { PropsWithChildren, useEffect, useId, useState } from "react";
import { IpoListItem } from "../types";
import { ipoData } from "../App";

export function InfoCard({ label, text, ...props }: PropsWithChildren & { label: string, text?: string | number }) {
  const id = useId();
  return (
    <div className="infoCard" key={id}>
      <p className="textMuted m-0">{label}</p>
      <p className="infoCardText m-0">{text || props.children}</p>
    </div>
  )
}

export default function IpoDetail() {
  let params = useParams();
  let navigate = useNavigate();

  let [ipoDetails, setIpoDetails] = useState<IpoListItem | undefined>();

  useEffect(() => {
    ipoDetails = ipoData.find(item => item.slug === params.ipo);
    if (!ipoDetails) {
      navigate(-1);
    }
    setTimeout(() => {
      setIpoDetails(ipoDetails);
    }, 200);
  }, []);

  {/* FIXME: can be separted to common component */}
  if (!ipoDetails) {
    return (
      <div className="flex alignItemsCenter justifyContentCenter">
        <p className="m-0">Loading...</p>
      </div>
    )
  }

  return (
    <div className="detailsWrapper">
      <div className="breadcrumbs">
        <a href="#" className="breadcrumbItem">Home</a>
        <FontAwesomeIcon color="#000" icon={faChevronRight} fontSize={"0.45rem"} />
        <a href="#" className="breadcrumbItem">Market Watch</a>
      </div>
      <div className="row alignItemsCenter">
        <div className="col-9">
          <div className="detailHeader">
            <button className="baseButton backButton" onClick={() => navigate(-1)}>
              <FontAwesomeIcon color="#000" icon={faChevronLeft} />
            </button>
            {/* FIXME: can be separted to common component */}
            <div className="companyThumb companyThumbLg">
              <div className="thumbImg">
                <img src={ipoDetails.thumbnail} />
              </div>
              <div className="companyDetails">
                <p className="companyName m-0">{ipoDetails.companyName}</p>
                <p className="companyLegalName textMuted m-0 ">{ipoDetails.legalName}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="flex alignItemsCenter gap-1 headerButtons">
            <button className="downloadButton">
              <img src="download.svg" />
            </button>
            <button className="baseButton applyNowButton">
              Apply now
            </button>
          </div>
        </div>
      </div>
      {/* FIXME: can be separted to common component */}
      <div className="infoSection">
        <h3 className="m-0">IPO details</h3>
        <div className="row">
          <div className="col-2">
            <InfoCard
              label="Issue Size"
              text={`${formatAmount(ipoDetails.issueSizeInCr)} Cr.`}
            />
          </div>
          <div className="col-2">
            <InfoCard
              label="Price Range"
              text={`${formatAmount(ipoDetails.priceRange.min)}-${ipoDetails.priceRange.max}`}
            />
          </div>
          <div className="col-2">
            <InfoCard
              label="Minimum Amount"
              text={`${formatAmount(ipoDetails.priceRange.min * ipoDetails.investmentConstraints.minShares)}`}
            />
          </div>
          <div className="col-2">
            <InfoCard
              label="Lot Size"
              text={`${ipoDetails.investmentConstraints.minShares} shares/lots`}
            />
          </div>
          <div className="col-2">
            <InfoCard
              label="Issue Date"
              text={ipoDetails.startDate && ipoDetails.endDate ? (
                getStartEndDate(ipoDetails.startDate, ipoDetails.endDate)
              ) : '-'}
            />
          </div>
          {ipoDetails.listingInfo ? (
            <div className="col-2">
              <InfoCard
                label="Listed on"
                text={ipoDetails.listingInfo?.listedDate || ''}
              />
            </div>
          ) : null}
          {ipoDetails.listingInfo ? (
            <div className="col-2">
              <InfoCard
                label="Listed price"
                text={ipoDetails.listingInfo?.listedPrice || ''}
              />
            </div>
          ) : null}
          {ipoDetails.listingInfo ? (
            <div className="col-2">
              <InfoCard
                label="Listing gains"
              >
                {formatAmount(ipoDetails.listingInfo?.listingGains || 0)}&nbsp;(<span className="textDanger">{ipoDetails.listingInfo?.listingGainsPercentage}%</span>)
              </InfoCard>
            </div>
          ) : null}
        </div>
      </div>
      <div className="infoSection">
        <h3>IPO timeline</h3>
        <Timeline events={ipoDetails.timeline || []} />
      </div>
      <div className="infoSection">
        <h3 className="m-0">About the company</h3>
        {/* can be markdown too */}
        {ipoDetails.aboutCompany.split('\n').map((str, index) => <p key={index}>{str}</p>)}
      </div>
    </div>
  )
}