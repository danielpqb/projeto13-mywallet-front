import dayjs from "dayjs";
import { useContext } from "react";
import styled from "styled-components";
import UserContext from "../../Context/UserContext";

export default function BalanceBox() {
  const { userData } = useContext(UserContext);

  function getTotal() {
    let total = 0;
    userData.transactions.forEach((transaction) => {
      total += transaction.value;
    });
    return total;
  }

  const balanceData = userData.transactions;
  const total = getTotal();

  return (
    <Container>
      {balanceData.length > 0 ? (
        <>
          <Transactions>
            {balanceData.map((transaction, index) => {
              return (
                <Transaction isNegative={transaction.value < 0} key={index}>
                  <div>{dayjs(transaction.date).format("DD/MM")}</div>
                  <div>{transaction.description}</div>
                  <div>{transaction.value.toFixed(2).replaceAll(".", ",")}</div>
                </Transaction>
              );
            })}
          </Transactions>
          <TotalValue>
            <div>Saldo</div>
            <div>{total.toFixed(2).replaceAll(".", ",")}</div>
          </TotalValue>
        </>
      ) : (
        <>
          <Transactions>
            <EmptyBalance>Não há registros de entrada ou saída</EmptyBalance>
          </Transactions>
        </>
      )}
    </Container>
  );
}

const Container = styled.div`
  & {
    max-height: calc(100% - 110px - 70px);
    flex-direction: column;

    font-weight: 700;

    padding: 10px 10px;

    background: #ffffff;
    border-radius: 5px;
  }
`;

const EmptyBalance = styled.div`
  & {
    width: 180px;

    color: #868686;
    font-size: 20px;
    text-align: center;
  }
`;

const TotalValue = styled.div`
  & {
    height: fit-content;

    padding-top: 5px;
  }

  div {
    justify-content: flex-start;

    font-size: 17px;
  }

  div:nth-child(1) {
    font-weight: 700;
    justify-content: flex-start;

    color: #000000;
  }
  div:nth-child(2) {
    justify-content: flex-end;

    color: #03ac00;
  }
`;

const Transactions = styled.div`
  & {
    flex-direction: column;

    justify-content: flex-start;

    overflow: scroll;
  }
`;

const Transaction = styled.div`
  & {
    height: fit-content;
    line-height: 30px;
  }

  div {
    font-size: 16px;
  }

  div:nth-child(1) {
    min-width: 60px;
    width: 60px;
    color: #c6c6c6;
  }
  div:nth-child(2) {
    justify-content: flex-start;
    color: #000000;
  }
  div:nth-child(3) {
    min-width: 100px;
    width: 100px;
    justify-content: flex-end;
    color: ${({ isNegative }) => (isNegative ? "#c70000" : "#03ac00")};
  }
`;
