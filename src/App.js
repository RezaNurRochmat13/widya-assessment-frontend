import { Admin, Resource, ListGuesser } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('http://localhost:8080/api/v1/');
const App = () => (
  <Admin dataProvider={dataProvider}>
    <Resource name="products" list={ListGuesser} />
  </Admin>
);

export default App;
