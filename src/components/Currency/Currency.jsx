import axios from 'axios';
import React, { useEffect, useState } from 'react';
import {
  StyledGradientWave,
  StyledGraphEur,
  StyledGraphUsd,
  StyledGraphWrapper,
  StyledTable,
  StyledTableWrapper,
  StyledTd,
  StyledTh,
  StyledThead,
  StyledWave,
} from './Currency.styled';
import { useMediaQuery } from 'react-responsive';

const Currency = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchDataAndStore = async () => {
      try {
        const response = await axios.get(
          'https://api.monobank.ua/bank/currency'
        );
        const newData = response.data;
        const fetchTime = new Date().getTime();
        localStorage.setItem(
          'MONO',
          JSON.stringify({ data: newData, fetchTime })
        );
        setData(newData);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    const storedData = localStorage.getItem('MONO');
    if (storedData) {
      const { data, fetchTime } = JSON.parse(storedData);
      const currentTime = new Date().getTime();
      if (currentTime - fetchTime < 3600000) {
        setData(data);
      } else {
        fetchDataAndStore();
      }
    } else {
      fetchDataAndStore();
    }
  }, []);

  const rateUSD = data?.find(obj => obj.currencyCodeA === 840);
  const rateEUR = data?.find(obj => obj.currencyCodeA === 978);
  const rateBuyUSD = rateUSD?.rateBuy.toFixed(2);
  const rateSellUSD = rateUSD?.rateSell.toFixed(2);
  const rateBuyEUR = rateEUR?.rateBuy.toFixed(2);
  const rateSellEUR = rateEUR?.rateSell.toFixed(2);

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  });
  const isMinTablet = useMediaQuery({
    query: '(min-width: 768px)',
  });

  const isMaxTablet = useMediaQuery({
    query: '(max-width: 1279px)',
  });
  const isDesktop = useMediaQuery({
    query: '(min-width: 1280px)',
  });

  return (
    <StyledTableWrapper>
      <StyledTable>
        <StyledThead>
          <tr>
            <StyledTh>Currency</StyledTh>
            <StyledTh>Purchase</StyledTh>
            <StyledTh>Sale</StyledTh>
          </tr>
        </StyledThead>
        <tbody>
          <tr>
            <StyledTd>USD</StyledTd>
            <StyledTd>{rateBuyUSD}</StyledTd>
            <StyledTd>{rateSellUSD}</StyledTd>
          </tr>
          <tr>
            <StyledTd>EUR</StyledTd>
            <StyledTd>{rateBuyEUR}</StyledTd>
            <StyledTd>{rateSellEUR}</StyledTd>
          </tr>
        </tbody>
      </StyledTable>

      {isMobile ? (
        <StyledGraphWrapper>
          <StyledWave
            xmlns="http://www.w3.org/2000/svg"
            width="320"
            height="72"
            viewBox="0 0 320 72"
            fill="none"
          >
            <path
              d="M0 48.1232L25.6 30.368C27.8187 28.4332 33.9968 24.5634 40.96 24.5634C47.9232 24.5634 53.4187 27.295 55.296 28.6608L110.08 67.5855C111.616 68.7237 116.326 71 122.88 71C129.434 71 134.144 68.7237 135.68 67.5855L230.4 6.46313C232.789 4.64208 238.08 1 244.736 1C251.392 1 257.365 4.64208 260.096 6.46313L280.576 20.8038C281.941 21.7144 286.208 23.5354 292.352 23.5354C298.496 23.5354 301.818 21.5514 303.104 20.8038C307.586 18.1985 310.805 15.3875 316.416 15.6821C317.137 15.72 318.834 15.8815 320 16.365"
              stroke="#FF868D"
            />
          </StyledWave>
          <StyledGradientWave
            xmlns="http://www.w3.org/2000/svg"
            width="320"
            height="88"
            viewBox="0 0 320 88"
            fill="none"
          >
            <path
              d="M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z"
              fill="url(#paint0_linear_34_6965)"
              fillOpacity="0.6"
            />
            <path
              d="M25.6 29.4725L0 47.2908V80C0 84.4183 3.58171 88 7.99999 88H312C316.418 88 320 84.4183 320 80V15.4197C318.834 14.9345 317.137 14.7724 316.416 14.7344C310.805 14.4387 307.586 17.2597 303.104 19.8743L303.048 19.9068C301.724 20.6803 298.409 22.6156 292.352 22.6156C286.208 22.6156 281.941 20.7881 280.576 19.8743L260.096 5.48257C257.365 3.65504 251.392 0 244.736 0C238.08 0 232.789 3.65504 230.4 5.48257L135.68 66.8225C134.144 67.9647 129.434 70.2491 122.88 70.2491C116.326 70.2491 111.616 67.9647 110.08 66.8225L55.296 27.7592C53.4187 26.3886 47.9232 23.6473 40.96 23.6473C33.9968 23.6473 27.8187 27.5308 25.6 29.4725Z"
              fill="#390096"
              fillOpacity="0.2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_34_6965"
                x1="160"
                y1="12.95"
                x2="160"
                y2="102.2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop
                  offset="0.374892"
                  stopColor="white"
                  stopOpacity="0.536458"
                />
                <stop
                  offset="0.6091"
                  stopColor="white"
                  stopOpacity="0.269957"
                />
                <stop
                  offset="0.766012"
                  stopColor="white"
                  stopOpacity="0.151176"
                />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </StyledGradientWave>
        </StyledGraphWrapper>
      ) : (
        ''
      )}
      {isMinTablet & isMaxTablet ? (
        <StyledGraphWrapper>
          <StyledWave
            xmlns="http://www.w3.org/2000/svg"
            width="338"
            height="72"
            viewBox="0 0 338 72"
            fill="none"
          >
            <path
              d="M1 48.291L27.88 30.4726C30.2096 28.5309 36.6966 24.6474 44.008 24.6474C51.3194 24.6474 57.0896 27.3886 59.0608 28.7593L116.584 67.8227C118.197 68.9649 123.143 71.2493 130.024 71.2493C136.905 71.2493 141.851 68.9649 143.464 67.8227L242.92 6.48258C245.429 4.65505 250.984 1 257.973 1C264.962 1 271.234 4.65505 274.101 6.48258L295.605 20.8744C297.038 21.7881 301.518 23.6156 307.97 23.6156C314.421 23.6156 317.909 21.6246 319.259 20.8744C323.966 18.2597 327.345 15.4387 333.237 15.7344C333.993 15.7724 335.776 15.9345 337 16.4198"
              stroke="#FF868D"
            />
          </StyledWave>
          <StyledGradientWave
            xmlns="http://www.w3.org/2000/svg"
            width="336"
            height="88"
            viewBox="0 0 336 88"
            fill="none"
          >
            <path
              d="M26.88 29.4724L0 47.2907V80C0 84.4183 3.58173 88 8.00001 88H328C332.418 88 336 84.4183 336 80V15.4195C334.776 14.9343 332.993 14.7722 332.237 14.7342C326.345 14.4385 322.966 17.2595 318.259 19.8741L318.201 19.9066C316.81 20.6801 313.33 22.6154 306.97 22.6154C300.518 22.6154 296.038 20.7879 294.605 19.8741L273.101 5.48234C270.234 3.65481 263.962 -0.000244141 256.973 -0.000244141C249.984 -0.000244141 244.429 3.65481 241.92 5.48234L142.464 66.8224C140.851 67.9646 135.905 70.249 129.024 70.249C122.143 70.249 117.197 67.9646 115.584 66.8224L58.0608 27.759C56.0896 26.3884 50.3194 23.6471 43.008 23.6471C35.6966 23.6471 29.2096 27.5306 26.88 29.4724Z"
              fill="url(#paint0_linear_32_4883)"
              fillOpacity="0.6"
            />
            <path
              d="M26.88 29.4724L0 47.2907V80C0 84.4183 3.58173 88 8.00001 88H328C332.418 88 336 84.4183 336 80V15.4195C334.776 14.9343 332.993 14.7722 332.237 14.7342C326.345 14.4385 322.966 17.2595 318.259 19.8741L318.201 19.9066C316.81 20.6801 313.33 22.6154 306.97 22.6154C300.518 22.6154 296.038 20.7879 294.605 19.8741L273.101 5.48234C270.234 3.65481 263.962 -0.000244141 256.973 -0.000244141C249.984 -0.000244141 244.429 3.65481 241.92 5.48234L142.464 66.8224C140.851 67.9646 135.905 70.249 129.024 70.249C122.143 70.249 117.197 67.9646 115.584 66.8224L58.0608 27.759C56.0896 26.3884 50.3194 23.6471 43.008 23.6471C35.6966 23.6471 29.2096 27.5306 26.88 29.4724Z"
              fill="#390096"
              fillOpacity="0.2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_32_4883"
                x1="168"
                y1="12.9498"
                x2="168"
                y2="102.2"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop
                  offset="0.374892"
                  stopColor="white"
                  stopOpacity="0.536458"
                />
                <stop
                  offset="0.6091"
                  stopColor="white"
                  stopOpacity="0.269957"
                />
                <stop
                  offset="0.766012"
                  stopColor="white"
                  stopOpacity="0.151176"
                />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </StyledGradientWave>
        </StyledGraphWrapper>
      ) : (
        ''
      )}
      {isDesktop ? (
        <StyledGraphWrapper $usd={rateBuyUSD}>
          <StyledGraphUsd>{rateBuyUSD}</StyledGraphUsd>
          <StyledGraphEur>{rateBuyEUR}</StyledGraphEur>
          <StyledWave
            xmlns="http://www.w3.org/2000/svg"
            width="480"
            height="102"
            viewBox="0 0 480 102"
            fill="none"
          >
            <path
              d="M0 68.5585L38.4 43.1037C41.728 40.3298 50.9952 34.7819 61.44 34.7819C71.8848 34.7819 80.128 38.6981 82.944 40.6561L165.12 96.461C167.424 98.0927 174.49 101.356 184.32 101.356C194.15 101.356 201.216 98.0927 203.52 96.461L345.6 8.83226C349.184 6.22151 357.12 1 367.104 1C377.088 1 386.048 6.22151 390.144 8.83226L420.864 29.3919C422.912 30.6973 429.312 33.3081 438.528 33.3081C447.744 33.3081 452.727 30.4637 454.656 29.3919C461.379 25.6567 466.207 21.6267 474.624 22.0492C475.705 22.1035 478.251 22.335 480 23.0282"
              stroke="#FF868D"
            />
          </StyledWave>
          <StyledGradientWave
            xmlns="http://www.w3.org/2000/svg"
            width="480"
            height="167"
            viewBox="0 0 480 167"
            fill="none"
          >
            <path
              d="M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z"
              fill="url(#paint0_linear_15_252)"
              fillOpacity="0.6"
            />
            <path
              d="M38.4 42.1037L0 67.5585V167H480V22.0282C478.251 21.335 475.705 21.1035 474.624 21.0492C466.207 20.6267 461.379 24.6567 454.656 28.3919L454.573 28.4384C452.585 29.5434 447.614 32.3081 438.528 32.3081C429.312 32.3081 422.912 29.6973 420.864 28.3919L390.144 7.83226C386.048 5.22151 377.088 0 367.104 0C357.12 0 349.184 5.22151 345.6 7.83226L203.52 95.461C201.216 97.0927 194.15 100.356 184.32 100.356C174.49 100.356 167.424 97.0927 165.12 95.461L82.944 39.6561C80.128 37.6981 71.8848 33.7819 61.44 33.7819C50.9952 33.7819 41.728 39.3298 38.4 42.1037Z"
              fill="#390096"
              fillOpacity="0.2"
            />
            <defs>
              <linearGradient
                id="paint0_linear_15_252"
                x1="240"
                y1="18.5"
                x2="240"
                y2="146"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop
                  offset="0.374892"
                  stopColor="white"
                  stopOpacity="0.536458"
                />
                <stop
                  offset="0.6091"
                  stopColor="white"
                  stopOpacity="0.269957"
                />
                <stop
                  offset="0.766012"
                  stopColor="white"
                  stopOpacity="0.151176"
                />
                <stop offset="1" stopColor="white" stopOpacity="0" />
              </linearGradient>
            </defs>
          </StyledGradientWave>
        </StyledGraphWrapper>
      ) : (
        ''
      )}
    </StyledTableWrapper>
  );
};

export default Currency;
