import { Button, Icon } from "design-react-kit";

function App() {
  return (
    <div style={{ padding: "2rem" }}>
      <Button color="primary" icon>
        <Icon icon="it-star-full" color="white" aria-hidden />
        <span>Conferma</span>
      </Button>
    </div>
  );
}

export default App;
