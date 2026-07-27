import { Button, Icon } from "design-react-kit";

function App() {
  return (
    <div
      style={{
        padding: "2rem",
        display: "flex",
        justifyContent: "center",
        gap: "1rem",
        flexDirection: "column",
      }}
    >
      <Button color="primary" icon>
        <Icon icon="it-star-full" color="white" aria-hidden />
        <span>No role</span>
      </Button>
      <Button color="primary" icon>
        <Icon icon="it-star-full" color="white" aria-hidden role="none" />
        <span>role="none"</span>
      </Button>
      <Button color="primary" icon>
        <Icon
          icon="it-star-full"
          color="white"
          aria-hidden
          role="presentation"
        />
        <span>role="presentation"</span>
      </Button>
      <Button color="primary" icon>
        <Icon icon="it-star-full" color="white" aria-hidden role="img" />
        <span>role="img"</span>
      </Button>
      <Button color="primary" icon>
        <Icon icon="it-star-full" color="white" aria-hidden role="asdfasdf" />
        <span>role="asdfasdf"</span>
      </Button>
    </div>
  );
}

export default App;
