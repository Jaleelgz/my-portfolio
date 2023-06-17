import styled from "@emotion/styled";

export const BannerStyled = styled.div`
  height: 100vh;
  scroll-snap-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    height: 100vh;
    scroll-snap-align: center;
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 30px;
    width: 1400px;
    /* background-color: rgba(0,0,0,0.5); */

    .left {
      flex: 2;
      display: flex;
      flex-direction: column;
      gap: 15px;

      .head {
        font-weight: 600;
        font-size: 50px;
        margin: 0px;
      }

      .subTxt {
        font-size: 22px;
        margin: 0px;
        color: lightgray;
      }

      button {
        width: 100px;
        padding: 10px;
        border-radius: 5px;
        background-color: #da4ea2;
        color: #fff;
        outline: none;
        border: none;
        cursor: pointer;
        font-weight: 600;
      }
    }
    .right {
      flex: 3;
      display: flex;
      align-items: center;
      justify-content: center;
      img {
        object-fit: contain;
        height: 90vh;
        animation: animate 2s infinite ease alternate;

        @keyframes animate {
          to{
            transform: translateY(20px);
          }
          
        }
      }
    }
  }
`;
