import styled from 'styled-components'

export const Tag = styled.div`
  background-color: #16454f;
  border-radius: 25px;
  color: #fff;
  display: inline-block;
  padding: 8px 20px 3px 20px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &::before {
    background: #fff;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: '';
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 43%;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #16454f;
    background-color: #feba34;
    box-shadow: inset 0 2px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 480px) {
  }
`
export const TagH = styled.div`
  background-color: #feba34;
  border-radius: 25px;
  color: #16454f;
  display: inline-block;
  padding: 8px 20px 3px 20px;

  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  overflow: hidden;


  &::before {
    background: #16454f;
    border-radius: 10px;
    box-shadow: inset 0 1px rgba(0, 0, 0, 0.25);
    content: '';
    height: 6px;
    left: 10px;
    position: absolute;
    width: 6px;
    top: 43%;
  }

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #fff;
    background-color: #16454f;
    box-shadow: inset 0 2px rgba(0, 0, 0, 0.25);
  }
  @media screen and (max-width: 480px) {
  }
`
export const Tag2 = styled.div`
  background-color: #16454f;
  border-radius: 25px;
  color: #fff;
  display: inline-block;
  padding: 8px 20px 3px 20px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #16454f;
    background-color: #feba34;
    box-shadow: inset 0 2px rgba(0, 0, 0, 0.25);
    overflow: hidden;

  }
`

export const Tag2H = styled.div`
  background-color: #feba34;
  border-radius: 25px;
  color: #16454f;
  display: inline-block;
  padding: 8px 20px 3px 20px;
  position: relative;
  margin: 0 10px 10px 0;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  overflow: hidden;

  &:hover {
    transition: all 0.3s ease-in-out;
    color: #fff;
    background-color: #16454f;
    box-shadow: inset 0 2px rgba(0, 0, 0, 0.25);
    overflow: hidden;

  }
`
