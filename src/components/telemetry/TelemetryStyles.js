import styled from "styled-components";

export const Container = styled.div`
  background: rgba(0, 0, 0, 0.8);
  padding: 2rem;
  min-width: 360px;
  position: fixed;
  top: 1rem;
  right: 1rem;
  border-radius: 15px;
  box-shadow: 5px 5px 15px rgba(0, 0, 0, 0.2);
  z-index: 100;
  color: #FAFAFA;
`

export const TelemetryContainer = styled.div`
  margin-top: 2rem;
`

export const TelemetryListContainer = styled.div`
  margin: 1rem 0;
`

export const Title = styled.div`
  font-weight: 700;
  font-size: 2.6rem;
  text-align: center;
`

export const Subtitle = styled.div`
  font-weight: 600;
  font-size: 1.3rem;
`

export const List = styled.ul`
  list-style: none;
  margin-top: 1rem;
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



