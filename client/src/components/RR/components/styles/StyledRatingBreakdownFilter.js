import styled from 'styled-components';

const StyledRatingBreakdownFilter = styled.div`

.rating-container {
    display: flex;
    flex-direction: column-reverse;
    .rating-breakdown-container {
      border: 0px;
      outline: 0px;
      background: transparent;
      padding: 5px;
      font-size: 20px;

      :hover {
        background: rgba(0, 0, 0, .1)
      }
    }

    .side {
      float: left;
      width: 15%;
      height: auto;
      margin-top: 8px;
      margin: 2px;
    }

    .breakdown-number {
      text-decoration: underline;
    }

    .click-container {
      width: 100%;
      height: 100%;
      background: transparent;
    }

    .middle {
      float: left;
      width: 80%;
      margin-top: 10px;
      margin: 2px;
    }

    .bar-container {
      width: 100%;
      background-color: transparent;
      border: 1px solid black;
      text-align: center;
      color: white;
    }

    .bar-5 {
      width: ${(props) => props.percents[5]};
      height: 30px;
      background-color: red;
    }
    .bar-4 {
      width: ${(props) => props.percents[4]};
      height: 30px;
      background-color: red;
    }
    .bar-3 {
      width: ${(props) => props.percents[3]};
      height: 30px;
      background-color: red;
    }
    .bar-2 {
      width: ${(props) => props.percents[2]};
      height: 30px;
      background-color: red;
    }
    .bar-1 {
      width: ${(props) => props.percents[1]};
      height: 30px;
      background-color: red;
    }
  }

  .below-ratings-container {
    display: flex;
    flex-direction: column;
    align-items: center;

    .current-sort {
      font-size: 16px;
      font-style: italic;
    }

    .remove-all {
      width: 20%;
      outline: 0px;
      border: 0px;
      font-size: 15px;
      background: transparent;
      text-decoration: underline;

      &:hover {
        color: red;
      }
    }

    .number-recommended {
      font-size: 17px;
    }
  }
`;

export default StyledRatingBreakdownFilter;
