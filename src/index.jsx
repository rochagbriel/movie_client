import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import Container from 'react-bootstrap/Container'

import './index.scss';

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
    return (
        <Container>
            <MainView />
        </Container>
    )
};

// Finds the root of the App
const container = document.querySelector('#root');
const root = createRoot(container);

// Tell React to render your app in the root DOM element
root.render(<MyFlixApplication />);