import styled from '@emotion/styled';

export const TransactionHistoryTable = styled.table`
    margin: 20px auto;
  background-color: #d6d6d6;

  border: 3px solid #000;
  border-radius: 15px;
  overflow: hidden;`

    export const Title = styled.th`
   text-align: center;
  width: 200px;
  height: 40px;
  background-color: gray;
  text-transform: uppercase;
  padding: 5px 25px 5px 25px;
 `

 export const TransactionElement = styled.tr`
   text-align: center;
   font-size: 20px;
   
background-color: ${props => {
   
   switch (props.type) {
     case 'invoice':
       return "rgba(242, 245, 89, 0.856)";
     case "payment":
       return "rgb(182, 255, 133)";
     case "deposit":
       return "rgb(155, 153, 238)";
     case "withdrawal":
       return "rgb(235, 141, 141)";
     default:
       return "gray";
    } }
  }
 
  
 `