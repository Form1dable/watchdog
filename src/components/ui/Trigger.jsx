import ReactDOM from "react-dom";
import styled from "styled-components"

export default function Trigger({x, y, color = "#333"}) {
    const Container = styled.div`
      position: fixed;
      top: 0;
      left: 0;
    `
    const X = styled.div`
      width: 2px;
      height: 100vh;
      background: ${color};
      position: fixed;
      left: ${x}px;
    `
    const Y = styled.div`
      width: 100vw;
      height: 2px;
      background: ${color};
      position: fixed;
      top: ${y}px;
    `
    const Coordinates = styled.div`
      position: fixed;
      overflow-wrap: normal;
      margin-top: 0.5rem;
      margin-left: 0.5rem;
      top: ${y}px;
      left: ${x}px;
    `


    return ReactDOM.createPortal(
        <Container>
            <Coordinates>{x} px, {y} px
            </Coordinates>
            <X></X>
            <Y></Y>
        </Container>,
        document.getElementById("trigger")
    )
}