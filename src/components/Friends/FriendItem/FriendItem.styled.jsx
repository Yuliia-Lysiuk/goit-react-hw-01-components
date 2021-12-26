import styled from '@emotion/styled'

export const Status = styled.span`
margin-right: 10px;
  display: block;
  width: 15px;
  height: 15px;
  border-radius: 50%;
  
  
  background-color: ${props => {
   return props.isOnline? "green" : "red"
  }
  }
  `

export const Online = styled.span`

  background-color: green;`

  export const Ofline = styled.span`

  background-color: red;`

  export const Name = styled.p`
margin-left: 20px;
font-size: 24px;
  `