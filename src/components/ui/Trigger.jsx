import ReactDOM from "react-dom";
import {useEffect} from "react"
import styled from "styled-components"

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
`
const X = styled.div`
  width: 2px;
  height: 100vh;
  position: fixed;
`
const Y = styled.div`
  width: 100vw;
  height: 2px;
  position: fixed;
`
const Coordinates = styled.div`
  position: fixed;
  overflow-wrap: normal;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
`

export default function Trigger(props) {


    return ReactDOM.createPortal(
        <Container>
            <Coordinates style={{top: `${props.y}px`, left: `${props.x}px`}}>{props.x} px, {props.y} px
            </Coordinates>
            <X style={{left: `${props.x}px`, background: `${props.color}`}}></X>
            <Y style={{top: `${props.y}px`, background: `${props.color}`}}></Y>
        </Container>,
        document.getElementById("trigger")
    )
}