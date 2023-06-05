import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container';
import { store } from './redux/store';
import { Provider } from 'react-redux';

import './index.scss';

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
  return (
    <Provider store={store}>
      <Container>
        <MainView />
      </Container>
    </Provider>
  );
};

// Finds the root of the App
const container = document.querySelector('#root');
const root = createRoot(container);

// Tell React to render your app in the root DOM element
root.render(<MyFlixApplication />);
