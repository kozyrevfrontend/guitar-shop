class Sort {
  setSortSettings(sortTypeHandler, sortFlowHandler) {
    const sort = document.querySelector(`.sort`);

    if (sort) {
      const sortByTypeButtons = document.querySelectorAll(`.sort__options-button`);
      const sortByFlowButtons = document.querySelectorAll(`.sort__view-button`);
      const sortByPriceButton = document.querySelector(`#by-price`);
      const sortByPopularityButton = document.querySelector(`#by-popularity`);
      const sortFlowUpButton = document.querySelector(`#up`);
      const sortFlowDownButton = document.querySelector(`#down`);

      sortByPriceButton.addEventListener(`click`, (evt) => {
        const sortType = evt.currentTarget.id;

        sortByTypeButtons.forEach((button) => {
          button.classList.remove(`sort__options-button--current`);
        });

        evt.currentTarget.classList.add(`sort__options-button--current`);

        sortTypeHandler(sortType);
      });

      sortByPopularityButton.addEventListener(`click`, (evt) => {
        const sortType = evt.currentTarget.id;

        sortByTypeButtons.forEach((button) => {
          button.classList.remove(`sort__options-button--current`);
        });

        evt.currentTarget.classList.add(`sort__options-button--current`);

        sortTypeHandler(sortType);
      });

      sortFlowUpButton.addEventListener(`click`, (evt) => {
        const sortFlow = evt.currentTarget.id;

        sortByFlowButtons.forEach((button) => {
          button.classList.remove(`sort__view-button--current`);
        });

        evt.currentTarget.classList.add(`sort__view-button--current`);

        sortFlowHandler(sortFlow);
      });

      sortFlowDownButton.addEventListener(`click`, (evt) => {
        const sortFlow = evt.currentTarget.id;

        sortByFlowButtons.forEach((button) => {
          button.classList.remove(`sort__view-button--current`);
        });

        evt.currentTarget.classList.add(`sort__view-button--current`);

        sortFlowHandler(sortFlow);
      });
    }
  }
}

export const sort = new Sort();
