import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const Container = styled.div`
    padding: 10px 20px;
    margin: 0 auto;
    max-width: 480px;
`;
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 10vh;
`;
const CoinList = styled.ul``;
const Coin = styled.li`
    margin-bottom: 10px;
    color: ${(props) => props.theme.bgColor};
    background: #fff;
    border-radius: 15px;

    a {
        padding: 20px;
        transition: color 0.2s ease-in;
        display: block;
    }
    &:hover {
        a {
          color: ${(props) => props.theme.accentColor};
        }
    }
`;

const Title = styled.h1`
    font-size: 48px;
    color: ${(props) => props.theme.accentColor}
`;

const Loader = styled.span`
    text-align: center;
    display: block;
`;

interface CoinInterface {
    id: string;
    name: string;
    symbol: string;
    rank: number;
    is_new: boolean;
    is_active: boolean;
    type: string;
}

function Coins() {
    const [coins, setCoins] = useState<CoinInterface[]>([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        (async () => {
            const response = await fetch("https://api.coinpaprika.com/v1/coins");
            const json = await response.json();
            setCoins(json.slice(0, 100));
            setLoading(false);
        })();
      }, []);

    return (
        <Container>
            <Header>
                <Title>Coins</Title>
            </Header>
            {loading ? (
                <Loader>Loading...</Loader>
            ) : (
                <CoinList>
                    {coins.map((coin) => (
                        <Coin key={coin.id}>
                            <Link to={`/${coin.id}`}>{coin.name} &rarr;</Link>
                        </Coin>
                    ))}
                </CoinList>
            )}
        </Container>
    );
}
export default Coins;