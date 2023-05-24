import { createRoot } from 'react-dom/client';
import { MainView } from './components/main-view/main-view';
import Conteiner from 'react-bootstrap/Container'

// Import statement to indicate that you need to bundle './index.scss'
import './index.scss';

// Main component (will eventually use all the others)
const MyFlixApplication = () => {
    return (
        <Conteiner>
            <MainView />
        </Conteiner>
    )
};

// Finds the root of the App
const container = document.querySelector('#root');
const root = createRoot(container);

// Tell React to render your app in the root DOM element
root.render(<MyFlixApplication />);