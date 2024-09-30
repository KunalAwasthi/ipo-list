import { useNavigate } from "react-router-dom";
import { IpoListItem } from "../types";
import { formatAmount, getStartEndDate } from "../util";

export default function IpoList({ ipoData }: { ipoData: IpoListItem[] }) {
  const navigate = useNavigate();
  return (
    <div className="tableWrapper">
      <table className="ipoTable">
        <thead>
          <tr>
            <th style={{ minWidth: '120px' }}>Company / Issue date</th>
            <th>Issue size</th>
            <th>Price range</th>
            <th>Min invest/qty</th>
          </tr>
        </thead>
        <tbody>
          {ipoData && ipoData.map((item: IpoListItem, index: number) => (
            <tr key={index} onClick={() => navigate(item.slug)}>
              <td>
                <div className="companyThumb">
                  <div className="thumbImg">
                    <img src={item.thumbnail} />
                  </div>
                  <div className="companyDetails">
                    <p className="companyName m-0">{item.companyName}</p>
                    <p className="textMuted m-0 ">
                      {item.startDate && item.endDate ? (
                        getStartEndDate(item.startDate, item.endDate)
                      ) : null}
                    </p>
                  </div>
                </div>
              </td>
              <td>
                <p className="textBold">{formatAmount(item.issueSizeInCr)} Crores</p>
              </td>
              <td>
                <p className="textBold">{`${formatAmount(item.priceRange.min)}-${item.priceRange.max}`}</p>
              </td>
              <td>
                <p className="textBold m-0">{formatAmount(item.priceRange.min * item.investmentConstraints.minShares)}</p>
                <p className="textMuted m-0">{item.investmentConstraints.minShares} shares/lots</p>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
