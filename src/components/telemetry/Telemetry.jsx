import ReactDOM from "react-dom";

export default function Telemetry() {
    return ReactDOM.createPortal(
        <div>Telemetry</div>, document.getElementById("telemetry")
    )
}