import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import IpoDetail from './components/IpoDetail'
import IpoList from './components/IpoList'
import { IpoListItem } from './types'

export const ipoData: IpoListItem[] = [
  {
    slug: 'go-air',
    companyName: "Go Air",
    legalName: "Go Air LTD",
    status: "upcoming",
    aboutCompany: "Go Air, one of India's leading low-cost carriers, aims to provide affordable air travel across domestic and international routes.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ante ut lacinia volutpat. Aliquam at massa nec arcu tempor fermentum. Curabitur nec dictum odio. Donec vitae enim at mi dictum lacinia. Maecenas ut dictum urna, nec blandit tellus. Curabitur ante dui, lobortis vitae cursus ut, tincidunt eu orci. Duis ac efficitur neque, quis accumsan ligula. Integer rhoncus dolor ligula, at sodales nunc suscipit sed. Donec molestie placerat ligula, quis mattis urna ullamcorper at.\nEtiam ultrices nunc interdum interdum placerat. Pellentesque sit amet sapien ac massa ullamcorper posuere eget id ante. Vivamus non urna lacus. Suspendisse ac vehicula velit, in vestibulum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec fermentum velit. Vivamus dictum enim at magna interdum, id consequat ligula egestas. Suspendisse viverra rhoncus magna vitae sodales.\nFusce auctor fermentum eros, aliquet ultricies nulla ornare a. Morbi enim mauris, gravida in tempor eget, fermentum ut ante. Suspendisse gravida odio sem, a consequat dolor semper at. Phasellus nec diam lectus. Mauris euismod sem enim, eu facilisis erat feugiat gravida. Proin consequat quis risus vel egestas. Suspendisse odio massa, cursus ac pellentesque nec, luctus ut eros. Duis vel magna in augue auctor laoreet vitae a erat. Sed placerat, nisi vitae aliquet porttitor, urna velit hendrerit diam, quis commodo libero lectus ac nunc. Proin consectetur ipsum quis felis interdum, non commodo lorem ullamcorper. Nunc porttitor pharetra euismod.\nUt vel mauris ipsum. Quisque quis nulla lectus. Nulla vitae sagittis mi, sed sodales nisi. Praesent ut euismod ante. Suspendisse mollis scelerisque est, vitae semper justo tristique in. Donec ac venenatis sapien. Suspendisse eget augue at nibh ullamcorper euismod. Nulla auctor ultricies felis non accumsan. Sed mattis ac orci in bibendum.\nDuis in aliquet nisi. Quisque a felis eget sapien pretium luctus eget ultrices velit. Praesent id fringilla magna. Sed varius erat ultrices sapien dignissim, gravida semper lorem finibus. Sed sit amet luctus mauris. Nulla accumsan id nisi id imperdiet. Ut aliquet enim dolor. Quisque vitae est nec lectus volutpat consectetur ut nec justo. Donec vestibulum mauris quis neque aliquam consectetur. Nunc massa urna, pellentesque eu nibh ut, tincidunt fermentum elit. Nullam eu nisl nibh.",
    thumbnail: "GoAir_Airlines.svg",
    ipoDocumentLink: "https://example.com/go-air-ipo-document.pdf",
    startDate: "2024-05-01",
    endDate: "2024-06-02",
    issueSizeInCr: 3600,
    priceRange: {
      min: 75,
      max: 80
    },
    investmentConstraints: {
      minShares: 100,
      numOfLots: 1
    },
    timeline: [
      { event: 'IPO Filing', eventDate: '2024-01-15', completed: true },
      { event: 'SEBI Approval', eventDate: '2024-02-10', completed: true },
      { event: 'Roadshow Start', eventDate: '2024-03-01', completed: true },
      { event: 'Bidding Open', eventDate: '2024-04-05', completed: true },
      { event: 'Bidding Close', eventDate: '2024-04-10', completed: true },
      { event: 'Allotment Finalization', eventDate: '2024-04-15', completed: true },
      { event: 'Refund Initiation', eventDate: '2024-04-18', completed: true },
      { event: 'Shares Credited', eventDate: '2024-04-20', completed: false },
      { event: 'IPO Listing', eventDate: '2024-04-25', completed: false }    
    ]
  },
  {
    slug: 'oyo',
    companyName: "OYO",
    legalName: "OYO LTD",
    status: "completed",
    aboutCompany: "OYO is one of the world's fastest-growing hotel chains, offering affordable lodging solutions across multiple countries.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ante ut lacinia volutpat. Aliquam at massa nec arcu tempor fermentum. Curabitur nec dictum odio. Donec vitae enim at mi dictum lacinia. Maecenas ut dictum urna, nec blandit tellus. Curabitur ante dui, lobortis vitae cursus ut, tincidunt eu orci. Duis ac efficitur neque, quis accumsan ligula. Integer rhoncus dolor ligula, at sodales nunc suscipit sed. Donec molestie placerat ligula, quis mattis urna ullamcorper at.\nEtiam ultrices nunc interdum interdum placerat. Pellentesque sit amet sapien ac massa ullamcorper posuere eget id ante. Vivamus non urna lacus. Suspendisse ac vehicula velit, in vestibulum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec fermentum velit. Vivamus dictum enim at magna interdum, id consequat ligula egestas. Suspendisse viverra rhoncus magna vitae sodales.\nFusce auctor fermentum eros, aliquet ultricies nulla ornare a. Morbi enim mauris, gravida in tempor eget, fermentum ut ante. Suspendisse gravida odio sem, a consequat dolor semper at. Phasellus nec diam lectus. Mauris euismod sem enim, eu facilisis erat feugiat gravida. Proin consequat quis risus vel egestas. Suspendisse odio massa, cursus ac pellentesque nec, luctus ut eros. Duis vel magna in augue auctor laoreet vitae a erat. Sed placerat, nisi vitae aliquet porttitor, urna velit hendrerit diam, quis commodo libero lectus ac nunc. Proin consectetur ipsum quis felis interdum, non commodo lorem ullamcorper. Nunc porttitor pharetra euismod.\nUt vel mauris ipsum. Quisque quis nulla lectus. Nulla vitae sagittis mi, sed sodales nisi. Praesent ut euismod ante. Suspendisse mollis scelerisque est, vitae semper justo tristique in. Donec ac venenatis sapien. Suspendisse eget augue at nibh ullamcorper euismod. Nulla auctor ultricies felis non accumsan. Sed mattis ac orci in bibendum.\nDuis in aliquet nisi. Quisque a felis eget sapien pretium luctus eget ultrices velit. Praesent id fringilla magna. Sed varius erat ultrices sapien dignissim, gravida semper lorem finibus. Sed sit amet luctus mauris. Nulla accumsan id nisi id imperdiet. Ut aliquet enim dolor. Quisque vitae est nec lectus volutpat consectetur ut nec justo. Donec vestibulum mauris quis neque aliquam consectetur. Nunc massa urna, pellentesque eu nibh ut, tincidunt fermentum elit. Nullam eu nisl nibh.",
    thumbnail: "oyo.png",
    ipoDocumentLink: "https://example.com/oyo-ipo-document.pdf",
    startDate: "2024-05-01",
    endDate: "2024-06-02",
    issueSizeInCr: 8400,
    priceRange: {
      min: 85,
      max: 95
    },
    investmentConstraints: {
      minShares: 20,
      numOfLots: 1
    },
    timeline: [
      { event: 'IPO Filing', eventDate: '2024-01-15', completed: true },
      { event: 'SEBI Approval', eventDate: '2024-02-10', completed: true },
      { event: 'Roadshow Start', eventDate: '2024-03-01', completed: true },
      { event: 'Bidding Open', eventDate: '2024-04-05', completed: true },
      { event: 'Bidding Close', eventDate: '2024-04-10', completed: true },
      { event: 'Allotment Finalization', eventDate: '2024-04-15', completed: true },
      { event: 'Refund Initiation', eventDate: '2024-04-18', completed: true },
      { event: 'Shares Credited', eventDate: '2024-04-20', completed: false },
      { event: 'IPO Listing', eventDate: '2024-04-25', completed: false }   
    ]
  },
  {
    slug: 'zomato',
    companyName: "Zomato",
    legalName: "Zomato LTD",
    status: "completed",
    aboutCompany: "Zomato is a leading food delivery and restaurant discovery platform in India, offering a range of services including restaurant reviews, food delivery, and online ordering.\n\nLorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris mattis ante ut lacinia volutpat. Aliquam at massa nec arcu tempor fermentum. Curabitur nec dictum odio. Donec vitae enim at mi dictum lacinia. Maecenas ut dictum urna, nec blandit tellus. Curabitur ante dui, lobortis vitae cursus ut, tincidunt eu orci. Duis ac efficitur neque, quis accumsan ligula. Integer rhoncus dolor ligula, at sodales nunc suscipit sed. Donec molestie placerat ligula, quis mattis urna ullamcorper at.\nEtiam ultrices nunc interdum interdum placerat. Pellentesque sit amet sapien ac massa ullamcorper posuere eget id ante. Vivamus non urna lacus. Suspendisse ac vehicula velit, in vestibulum augue. Interdum et malesuada fames ac ante ipsum primis in faucibus. Phasellus nec fermentum velit. Vivamus dictum enim at magna interdum, id consequat ligula egestas. Suspendisse viverra rhoncus magna vitae sodales.\nFusce auctor fermentum eros, aliquet ultricies nulla ornare a. Morbi enim mauris, gravida in tempor eget, fermentum ut ante. Suspendisse gravida odio sem, a consequat dolor semper at. Phasellus nec diam lectus. Mauris euismod sem enim, eu facilisis erat feugiat gravida. Proin consequat quis risus vel egestas. Suspendisse odio massa, cursus ac pellentesque nec, luctus ut eros. Duis vel magna in augue auctor laoreet vitae a erat. Sed placerat, nisi vitae aliquet porttitor, urna velit hendrerit diam, quis commodo libero lectus ac nunc. Proin consectetur ipsum quis felis interdum, non commodo lorem ullamcorper. Nunc porttitor pharetra euismod.\nUt vel mauris ipsum. Quisque quis nulla lectus. Nulla vitae sagittis mi, sed sodales nisi. Praesent ut euismod ante. Suspendisse mollis scelerisque est, vitae semper justo tristique in. Donec ac venenatis sapien. Suspendisse eget augue at nibh ullamcorper euismod. Nulla auctor ultricies felis non accumsan. Sed mattis ac orci in bibendum.\nDuis in aliquet nisi. Quisque a felis eget sapien pretium luctus eget ultrices velit. Praesent id fringilla magna. Sed varius erat ultrices sapien dignissim, gravida semper lorem finibus. Sed sit amet luctus mauris. Nulla accumsan id nisi id imperdiet. Ut aliquet enim dolor. Quisque vitae est nec lectus volutpat consectetur ut nec justo. Donec vestibulum mauris quis neque aliquam consectetur. Nunc massa urna, pellentesque eu nibh ut, tincidunt fermentum elit. Nullam eu nisl nibh.",
    thumbnail: "zomato.png",
    ipoDocumentLink: "https://example.com/zomato-ipo-document.pdf",
    startDate: "2024-05-01",
    endDate: "2024-06-02",
    issueSizeInCr: 1230,
    priceRange: {
      min: 70,
      max: 76
    },
    investmentConstraints: {
      minShares: 15,
      numOfLots: 1
    },
    listingInfo: {
      listedDate: "2024-03-15",
      listedPrice: 80,
      listingGains: 10,
      listingGainsPercentage: 10,
    },
    timeline: [
      { event: 'IPO Filing', eventDate: '2024-01-15', completed: true },
      { event: 'SEBI Approval', eventDate: '2024-02-10', completed: true },
      { event: 'Roadshow Start', eventDate: '2024-03-01', completed: true },
      { event: 'Bidding Open', eventDate: '2024-04-05', completed: true },
      { event: 'Bidding Close', eventDate: '2024-04-10', completed: true },
      { event: 'Allotment Finalization', eventDate: '2024-04-15', completed: true },
      { event: 'Refund Initiation', eventDate: '2024-04-18', completed: true },
      { event: 'Shares Credited', eventDate: '2024-04-20', completed: false },
      { event: 'IPO Listing', eventDate: '2024-04-25', completed: false }   
    ]
  }
]

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={() => <IpoList ipoData={ipoData} />} />
        <Route path='/:ipo' Component={() => <IpoDetail />} />
      </Routes>
      {/* <IpoList ipoData={ipoData} />
      <IpoDetail ipoDetails={ipoData[0]} /> */}
    </BrowserRouter>
    </>
  )
}

export default App
