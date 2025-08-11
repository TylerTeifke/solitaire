import './WinScreen.css'
import { useNavigate } from 'react-router-dom';

const WinScreen = () => {
  let navigate = useNavigate();

  const handleResetGameButton = () => {
    navigate("/")
  }

  return (
    <div>
        <h1>You Won</h1>
        <button title='Reset Game Button' onClick={handleResetGameButton}>
            Reset Game
        </button>
    </div>
  );
}

export default WinScreen