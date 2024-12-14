import Header from '../../components/header/header';
import LocationsList from '../../components/location/location';
import { Helmet } from 'react-helmet-async';
import CitiesPlacesList from '../../components/cities-places-list/cities-places-list';
import { Offers } from '../../types/offers';


type MainScreenProps = {
 offers:Offers;
 cardClassName:string;
 onHandleActiveIdChange: (id: string | null) => void;
};

function MainScreen({ offers,cardClassName, onHandleActiveIdChange }: MainScreenProps): JSX.Element {
  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>Главная страница</title>
      </Helmet>
      <Header></Header>
      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <section className="locations container">
            <LocationsList></LocationsList>
          </section>
        </div>
        <div className="cities">
          <div className="cities__places-container container">
            <CitiesPlacesList offers={offers} cardClassName={cardClassName} onHandleActiveIdChange={onHandleActiveIdChange}></CitiesPlacesList>
            <div className="cities__right-section">
              <section className="cities__map map"></section>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainScreen;
