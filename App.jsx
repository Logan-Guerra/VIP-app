import "./App.css";
import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import AllowNotifications from "./components/AllowNotifications";
import Discover from "./components/Discover";
import AllowLocation from "./components/AllowLocation";
import Search from "./components/Search";
import MyEvents from "./components/MyEvents";
import PhoneVerification from "./components/PhoneVerification";
import MyTabs from "./components/MyTabs";
import VIPAccess from "./components/VIPAccess";
import AccountSettings from "./components/AccountSettings";
import VenueInformation from "./components/VenueInformation";
import Passwords from "./components/Passwords";
import History from "./components/History";
import LogInOptions from "./components/LogInOptions";
import PaymentMethod from "./components/PaymentMethod";
import LocationServices from "./components/LocationServices";
import NotificationSettings from "./components/NotificationSettings";
import PromoterLogIn from "./components/PromoterLogIn";
import Booking from "./components/Booking";
import CreateGroupFundEvent from "./components/CreateGroupFundEvent";
import ReviewTab from "./components/ReviewTab";
import CustomerReviews from "./components/CustomerReviews";
import PartyTracker from "./components/PartyTracker";
import ByRatingCopy from "./components/ByRatingCopy";
import ByLocation from "./components/ByLocation";
import WalkthroughDevicePage4 from "./components/WalkthroughDevicePage4";
import WalkthroughDevicePage3 from "./components/WalkthroughDevicePage3";
import WalkthroughDevicePage2 from "./components/WalkthroughDevicePage2";
import WalkthroughDevice from "./components/WalkthroughDevice";
import CreateAccount from "./components/CreateAccount";
import PromotersProfile from "./components/PromotersProfile";
import VIPScreenDark from "./components/VIPScreenDark";

class App extends React.Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route path="/allow-notifications">
            <AllowNotifications text1="09:41" place="Back" done="Done" rectangle="/img/rectangle@2x.png" />
          </Route>
          <Route path="/discover">
            <Discover {...discoverData} />
          </Route>
          <Route path="/allow-location">
            <AllowLocation {...allowLocationData} />
          </Route>
          <Route path="/search">
            <Search {...searchData} />
          </Route>
          <Route path="/my-events">
            <MyEvents {...myEventsData} />
          </Route>
          <Route path="/phone-verification">
            <PhoneVerification
              text6="09:41"
              editPhone="Edit phone"
              iDidnTReceiveAMessage="I didn't receive a message"
              skip="Skip"
              overlapGroup1="/img/rectangle-15@2x.png"
            />
          </Route>
          <Route path="/my-tabs">
            <MyTabs {...myTabsData} />
          </Route>
          <Route path="/vip-access">
            <VIPAccess {...vIPAccessData} />
          </Route>
          <Route path="/:path(|account-settings)">
            <AccountSettings {...accountSettingsData} />
          </Route>
          <Route path="/venue-information">
            <VenueInformation {...venueInformationData} />
          </Route>
          <Route path="/passwords">
            <Passwords {...passwordsData} />
          </Route>
          <Route path="/history">
            <History {...historyData} />
          </Route>
          <Route path="/log-in-options">
            <LogInOptions {...logInOptionsData} />
          </Route>
          <Route path="/payment-method">
            <PaymentMethod
              text14="09:41"
              selectYourPreferredPaymentMethod="Select your preferred payment method"
              rectangle="/img/rectangle-30@2x.png"
              creditOrDebitCard="Credit or debit card"
              rectangle2="/img/rectangle-31@2x.png"
              paypal="PayPal"
            />
          </Route>
          <Route path="/location-services">
            <LocationServices
              rectangle="/img/rectangle-32@2x.png"
              text15="09:41"
              place="Back"
              locationServices="Location Services"
              locationServices2="Location Services"
            />
          </Route>
          <Route path="/notification-settings">
            <NotificationSettings {...notificationSettingsData} />
          </Route>
          <Route path="/promoter-log-in">
            <PromoterLogIn {...promoterLogInData} />
          </Route>
          <Route path="/booking">
            <Booking {...bookingData} />
          </Route>
          <Route path="/create-group-fund-event">
            <CreateGroupFundEvent {...createGroupFundEventData} />
          </Route>
          <Route path="/review-tab">
            <ReviewTab
              text20="09:41"
              reviewOrder="Review Order"
              close="Close"
              total="Total"
              price="$37.80"
              completeOrder="Complete order"
              byClickingComplet={`By clicking "Complete order" you accept to our Terms of Service and Privacy Policy`}
            />
          </Route>
          <Route path="/customer-reviews">
            <CustomerReviews {...customerReviewsData} />
          </Route>
          <Route path="/party-tracker">
            <PartyTracker {...partyTrackerData} />
          </Route>
          <Route path="/by-rating-copy">
            <ByRatingCopy {...byRatingCopyData} />
          </Route>
          <Route path="/by-location">
            <ByLocation {...byLocationData} />
          </Route>
          <Route path="/walkthrough-device-page-4">
            <WalkthroughDevicePage4
              text28="09:41"
              rectangle="/img/rectangle-43@2x.png"
              splitPayGroupFund="Split Pay/Group Fund"
              whenTheBillIsDue="When the bill is due, our unique system allows you to split the bill instantly by request. Sick of no one accepting your request? Group Fund allows you to send out an invite for an event contingent on prepaid contributions"
            />
          </Route>
          <Route path="/walkthrough-device-page-3">
            <WalkthroughDevicePage3
              text29="09:41"
              rectangle="/img/rectangle-43@2x.png"
              partyTracker="Party Tracker"
              thisUniqueToolGiv="This unique tool gives you a peak at how busy each place is. Link it to your contacts to see where people you know are heading that night."
            />
          </Route>
          <Route path="/walkthrough-device-page-2">
            <WalkthroughDevicePage2
              text30="09:41"
              rectangle="/img/rectangle-43@2x.png"
              vipAccess="VIP Access"
              accesToSomeOfThe="Acces to some of the hottest night life in your area and the tip of your fingers. Use our VIP Access QR codes to get your friends past those long lines"
            />
          </Route>
          <Route path="/walkthrough-device">
            <WalkthroughDevice
              overlapGroup="/img/rectangle-46@1x.png"
              text31="09:41"
              rectangle="/img/rectangle-43@2x.png"
              welcomeToVip="Welcome to VIP"
              checkOutSomeOfOu="check out some of our unique features that helps you connect and plan a night out at bars"
              getStarted="Get started"
            />
          </Route>
          <Route path="/create-account">
            <CreateAccount {...createAccountData} />
          </Route>
          <Route path="/promoters-profile">
            <PromotersProfile {...promotersProfileData} />
          </Route>
          <Route path="/vip-screen-dark">
            <VIPScreenDark
              rectangle="/img/rectangle@2x.png"
              text1="09:41"
              tableAndPrivateSectionService="Table and Private Section Service"
            />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
const discoverData = {
    rectangle2: "/img/rectangle-1@2x.png",
    rectangle3: "/img/rectangle-2@2x.png",
    rectangle4: "/img/rectangle-3@2x.png",
    rectangle5: "/img/rectangle-4@2x.png",
    rectangle6: "/img/rectangle-2@2x.png",
    rectangle7: "/img/rectangle-3@2x.png",
    rectangle8: "/img/rectangle-4@2x.png",
    rectangle9: "/img/rectangle-8@2x.png",
    rectangle10: "/img/rectangle-9@2x.png",
    text2: "09:41",
    becomeAPromoter: "Become a Promoter",
    title: "Discover",
    featuredVenues: "Featured Venues",
    subtitle: "Subtitle",
    byRatings: "By Ratings",
    seeAll: "See All",
    number: "1",
    itemName: "Item Name",
    subtitle2: "Subtitle",
    number2: "2",
    itemName2: "Item Name",
    subtitle3: "Subtitle",
    number3: "3",
    itemName3: "Item Name",
    subtitle4: "Subtitle",
    number4: "1",
    itemName4: "Item Name",
    subtitle5: "Subtitle",
    number5: "2",
    itemName5: "Item Name",
    subtitle6: "Subtitle",
    number6: "3",
    itemName6: "Item Name",
    subtitle7: "Subtitle",
    place: "Home",
    search: "Search",
    myEvents: "My Events",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
    byLocation: "By Location",
    seeAll2: "See All",
    partyTracker: "Party Tracker",
    rsvpWhereYouReGo: "RSVP where you're going tonight and make it the move",
    groupFund: "Group Fund",
    raiseTheMoneyBeforeYouCommit: "Raise the money before you commit",
};

const allowLocationData = {
    rectangle: "/img/rectangle-10@2x.png",
    text3: "09:41",
    later: "Later",
    location: "Location",
    place: "No",
    yes: "Yes",
    allowLocationAccess: "Allow location access",
    weWillNeedToAcce: "We will need to access your location so we can track your activities while you are using the app.",
};

const searchData = {
    rectangle1: "/img/rectangle-1-1@1x.png",
    rectangle: "/img/rectangle-11@1x.png",
    rectangle2: "/img/rectangle-12@2x.png",
    rectangle3: "/img/rectangle-13@2x.png",
    rectangle4: "/img/rectangle-14@2x.png",
    inputType: "text",
    inputPlaceholder: "Search",
    place: "Home",
    search: "Search",
    myEvent: "My Event",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
    catalogItemNameOne: "Catalog Item Name One",
    subtitle: "Subtitle",
    catalogItemNameTwo: "Catalog Item Name Two",
    subtitle2: "Subtitle",
    catalogItemNameThree: "Catalog Item Name Three",
    subtitle3: "Subtitle",
    searchVenues: "Search Venues",
    text4: "09:41",
};

const myEventsData = {
    text5: "09:41",
    myEvents: "My Events",
    groupFundOption: "Group fund option",
    upComingEvent: "Up coming event",
    subtitle: "Subtitle",
    title: "Title",
    subtitle2: "Subtitle",
    place: "Home",
    search: "Search",
    myEvents2: "My Events",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
};

const myTabsData = {
    text7: "09:41",
    myTabs: "My Tabs",
    barSelectedBasedOnLocation: "Bar Selected - based on location",
    inputType: "text",
    inputPlaceholder: "Search drinks",
    myOrder: "My Order",
    label: "Label",
    label2: "Label",
    label3: "Label",
    label4: "Label",
    closeTab: "Close Tab",
    place: "Home",
    search: "Search",
    myEvents: "My Events",
    myTabs2: "My Tabs",
    vipAccess: "VIP Access",
};

const vIPAccessData = {
    rectangle: "/img/rectangle-16@2x.png",
    text8: "09:41",
    place: "Home",
    search: "Search",
    myEvents: "My Events",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
    vipAccess2: "VIP Access",
    subtitle: "Subtitle",
    promoterRewardTracker: "Promoter reward tracker",
};

const accountSettingsData = {
    text9: "09:41",
    rectangle: "/img/rectangle-17@2x.png",
    ad: "ad",
    place: "Home",
    search: "Search",
    favorits: "Favorits",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
};

const venueInformationData = {
    rectangle: "/img/rectangle-18@2x.png",
    rectangle2: "/img/rectangle-19@2x.png",
    rectangle3: "/img/rectangle-20@2x.png",
    rectangle4: "/img/rectangle-21@2x.png",
    rectangle5: "/img/rectangle-22@2x.png",
    rectangle6: "/img/rectangle-23@2x.png",
    rectangle10: "/img/rectangle-24@2x.png",
    rectangle12: "/img/rectangle-25@2x.png",
    rectangle13: "/img/rectangle-26@2x.png",
    text10: "09:41",
    locationInfo: "Location Info",
    featureOneFeatureTwoFeatureThree: "Feature One Feature Two Feature Three",
    x10Pm12Pm: "10PM - 12PM",
    phone2: "+49 30 263 91 90",
    greenplaceCom: "greenplace.com",
    venueInfo: "Venue info",
    checkIn: "Check In",
    wedJan20: "Wed, Jan 20",
    selectPackage: "Select Package",
    tagline: "TAGLINE",
    brandNameOrMarkOfLocation: "Brand name or mark of location",
    featurerating: "Feature・Rating",
    place: "Reserve",
    tagline2: "TAGLINE",
    packageDescription: "Package Description",
    featureOneFeatureTwo: "Feature One · Feature Two",
    price: "$700",
    tagline3: "TAGLINE",
    packageDescription2: "Package Description",
    featureOneFeatureTwo2: "Feature One · Feature Two",
    price2: "$1500",
    reviews: "Reviews",
    number: "25",
};

const passwordsData = {
    text11: "09:41",
    passwords: "Passwords",
    inputType: "email",
    inputPlaceholder: "Email Address",
    inputType2: "password",
    inputPlaceholder2: "Current Password",
    inputType3: "password",
    inputPlaceholder3: "New Password",
    save: "Save",
};

const historyData = {
    rectangle: "/img/rectangle-12@2x.png",
    rectangle2: "/img/rectangle-13@2x.png",
    rectangle3: "/img/rectangle-14@2x.png",
    text12: "09:41",
    place: "Back",
    history: "History",
    place2: "Home",
    search: "Search",
    myEvents: "My Events",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
    catalogItemNameOne: "Catalog Item Name One",
    subtitle: "Subtitle",
    catalogItemNameTwo: "Catalog Item Name Two",
    subtitle2: "Subtitle",
    catalogItemNameThree: "Catalog Item Name Three",
    subtitle3: "Subtitle",
};

const logInOptionsData = {
    text13: "09:41",
    signIn: "Sign In",
    createAccount: "Create account",
    signUpWithApple: "Sign up with Apple",
    signUpWithFacebook: "Sign up with Facebook",
    signUpWithGoogle: "Sign up with Google",
    orSignInByEmail: "or sign in by email",
    email: "Email",
    password: "Password",
    stageCanSendMePr: "Stage can send me product updates and the occasional newsletters",
    iAgreeToTheTerms: "I agree to the Terms and Conditions and Privacy Policy.",
    createAccount2: "Create account",
};

const notificationSettingsData = {
    text16: "09:41",
    notificationSettings: "Notification settings",
    allowNotifications: "Allow Notifications",
    notificationsPrevie: "Notifications previews will be shown whether the phone is locked or unlocked",
    bannerStyle: "Banner Style",
    temporary: "Temporary",
    sounds: "Sounds",
    badges: "Badges",
    showPreviews: "Show Previews",
    xdefault: "Default",
    save: "Save",
};

const promoterLogInData = {
    text17: "09:41",
    place: "Back",
    promoterLogIn: "Promoter log-in",
    inputType: "email",
    inputPlaceholder: "Email Address",
    inputType2: "password",
    inputPlaceholder2: "••••••••••••••",
    logIn: "Log In",
};

const bookingData = {
    rectangle: "/img/rectangle-33@2x.png",
    text18: "09:41",
    place: "Back",
    clubNameImage: "Club Name/image",
    confirm: "Confirm",
    reservation: "Reservation",
    package: "Package",
    place2: "Date",
    address: "22 Apr – 24 Apr",
    comments: "Comments",
    total: "Total",
    price: "$700",
    yourCardWillNot: "*Your card will not be charged until the end of your event A deposit may be required from the venue",
    selected: "Selected",
};

const createGroupFundEventData = {
    text19: "09:41",
    groupFund: "Group Fund",
    create: "Create",
    create2: "Create",
    place: "Home",
    search: "Search",
    myEvents: "My Events",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
};

const customerReviewsData = {
    text21: "09:41",
    reviews: "Reviews",
    text22: "★★★★★",
    date: "July 5, 2020",
    perfectRichUndulgenceTinyJar: "Perfect rich undulgence- tiny jar",
    iAm57AndFairSki: "I am 57 and fair skinned so I am dry dry dry. This stuff is so emollient and rich BUT I do not feel greasy or coated. Just moisturized. I can’t wait to open the jar because it smells so good and nothing about it reeks of chemicals. I like that the jar is dark glass so the natural ingredients don’t diminish from the light. I just wish it wasn’t so dang pricey.",
    rectangle: "/img/rectangle-35@2x.png",
    rectangle2: "/img/rectangle-36@2x.png",
    text23: "★★☆☆☆",
    date2: "October 24, 2017",
    twoStars: "Two Stars",
    smellsNiceButItD: "Smells nice but it didn't really work for my dry skin. Packaging could be improved .",
    text24: "★★★★☆",
    november102008: "November 10, 2008",
    surname: "Love this moisturizer",
    iVeBeenUsingThis: "I've been using this product for about 5 yrs. Everyone tells me that I have beautiful skin. Great for ultra ultra dry skin. Love it!",
    rectangle3: "/img/rectangle-34@2x.png",
};

const partyTrackerData = {
    text25: "09:41",
    place: "Home",
    search: "Search",
    myEvents: "My Events",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
    place2: "Back",
    partyTracker: "Party Tracker",
    mostPopularOverall: "Most Popular: Overall",
    club1: "Club 1",
    address: "18 people in your contacts are going here",
    club2: "Club 2",
    dead: "Dead",
    dead2: "Dead",
    dead3: "Dead",
    fullHouse: "Full House",
    fullHouse2: "Full House",
    fullHouse3: "Full House",
    club3: "Club 3",
};

const byRatingCopyData = {
    rectangle: "/img/rectangle-12@2x.png",
    rectangle2: "/img/rectangle-13@2x.png",
    rectangle3: "/img/rectangle-14@2x.png",
    text26: "09:41",
    place: "Back",
    byRating: "By rating",
    place2: "Home",
    search: "Search",
    myEvents: "My Events",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
    catalogItemNameOne: "Catalog Item Name One",
    subtitle: "Subtitle",
    catalogItemNameTwo: "Catalog Item Name Two",
    subtitle2: "Subtitle",
    catalogItemNameThree: "Catalog Item Name Three",
    subtitle3: "Subtitle",
};

const byLocationData = {
    rectangle: "/img/rectangle-12@2x.png",
    rectangle2: "/img/rectangle-13@2x.png",
    rectangle3: "/img/rectangle-14@2x.png",
    text27: "09:41",
    place: "Back",
    byLocation: "By location",
    place2: "Home",
    search: "Search",
    myEvents: "My Events",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
    catalogItemNameOne: "Catalog Item Name One",
    subtitle: "Subtitle",
    catalogItemNameTwo: "Catalog Item Name Two",
    subtitle2: "Subtitle",
    catalogItemNameThree: "Catalog Item Name Three",
    subtitle3: "Subtitle",
};

const createAccountData = {
    text32: "09:41",
    signIn: "Sign In",
    createAccount: "Create account",
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    password: "Password",
    createAccount2: "Create account",
};

const promotersProfileData = {
    place: "Home",
    search: "Search",
    myEvents: "My Events",
    myTabs: "My Tabs",
    vipAccess: "VIP Access",
    rectangle: "/img/rectangle-48@2x.png",
    place2: "Home",
    search2: "Search",
    myEvents2: "My Events",
    myTabs2: "My Tabs",
    vipAccess2: "VIP Access",
    place3: "Home",
    search3: "Search",
    myEvents3: "My Events",
    myTabs3: "My Tabs",
    vipAccess3: "VIP Access",
    place4: "Home",
    search4: "Search",
    myEvents4: "My Events",
    myTabs4: "My Tabs",
    vipAccess4: "VIP Access",
    place5: "Home",
    search5: "Search",
    myEvents5: "My Events",
    myTabs5: "My Tabs",
    vipAccess5: "VIP Access",
    place6: "Home",
    search6: "Search",
    myEvents6: "My Events",
    myTabs6: "My Tabs",
    vipAccess6: "VIP Access",
    place7: "Home",
    search7: "Search",
    myEvents7: "My Events",
    myTabs7: "My Tabs",
    vipAccess7: "VIP Access",
    place8: "Home",
    search8: "Search",
    myEvents8: "My Events",
    myTabs8: "My Tabs",
    vipAccess8: "VIP Access",
    text33: "09:41",
    place9: "Back",
    edit: "EDIT",
    place10: "Home",
    search9: "Search",
    myEvents9: "My Events",
    myTabs9: "My Tabs",
    vipAccess9: "VIP Access",
    place11: "Home",
    search10: "Search",
    myEvents10: "My Events",
    myTabs10: "My Tabs",
    vipAccess10: "VIP Access",
    place12: "Home",
    search11: "Search",
    myEvents11: "My Events",
    myTabs11: "My Tabs",
    vipAccess11: "VIP Access",
    place13: "Home",
    search12: "Search",
    myEvents12: "My Events",
    myTabs12: "My Tabs",
    vipAccess12: "VIP Access",
    place14: "Home",
    search13: "Search",
    myEvents13: "My Events",
    myTabs13: "My Tabs",
    vipAccess13: "VIP Access",
    place15: "Home",
    search14: "Search",
    myEvents14: "My Events",
    myTabs14: "My Tabs",
    vipAccess14: "VIP Access",
    place16: "Home",
    search15: "Search",
    myEvents15: "My Events",
    myTabs15: "My Tabs",
    vipAccess15: "VIP Access",
    place17: "Home",
    search16: "Search",
    myEvents16: "My Events",
    myTabs16: "My Tabs",
    vipAccess16: "VIP Access",
    place18: "Home",
    search17: "Search",
    myEvents17: "My Events",
    myTabs17: "My Tabs",
    vipAccess17: "VIP Access",
    place19: "Home",
    search18: "Search",
    myEvents18: "My Events",
    myTabs18: "My Tabs",
    vipAccess18: "VIP Access",
    place20: "Home",
    search19: "Search",
    myEvents19: "My Events",
    myTabs19: "My Tabs",
    vipAccess19: "VIP Access",
    place21: "Home",
    search20: "Search",
    myEvents20: "My Events",
    myTabs20: "My Tabs",
    vipAccess20: "VIP Access",
    place22: "Home",
    search21: "Search",
    myEvents21: "My Events",
    myTabs21: "My Tabs",
    vipAccess21: "VIP Access",
    place23: "Home",
    search22: "Search",
    myEvents22: "My Events",
    myTabs22: "My Tabs",
    vipAccess22: "VIP Access",
    place24: "Home",
    search23: "Search",
    myEvents23: "My Events",
    myTabs23: "My Tabs",
    vipAccess23: "VIP Access",
    vipAccess24: "VIP Access",
    place25: "Home",
    search24: "Search",
    myEvents24: "My Events",
    myTabs24: "My Tabs",
    vipAccess25: "VIP Access",
};

