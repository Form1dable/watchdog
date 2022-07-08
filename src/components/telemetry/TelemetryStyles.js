import styled from "styled-components";

export const Container = styled.div`
  position: fixed;
  top: 1rem;
  right: 1rem;
  z-index: 100;
  color: #FAFAFA;
  width: 100%;
  max-width: 800px;
  display: flex;
  flex-direction: column;
`

export const TelemetryContainer = styled.div`
  background: rgba(0, 0, 0, 0.8);
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.3);
  padding: 1rem 2rem;
  margin: 0.4rem;
  width: 100%;
  border-radius: 10px;
`


export const TelemetryContainerSection = styled.div`
  display: flex;
`

export const Subtitle = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
  text-align: center;
`

export const List = styled.ul`
  list-style: none;
  margin-top: 0.8rem;
`

export const ListItem = styled.li`
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 400;
  line-height: 2em;
`

export const Property = styled.span`
  font-weight: 500;
  opacity: 0.9;
`

export const Value = styled.span`
  opacity: 0.7;
`

export const HorizontalLine = styled.div`
  width: 100%;
  background: rgba(255, 255, 255, 0.2);
  height: 1.5px;
  margin: 0.3rem 0;
`
