class Filters {
  setFiltersFormSettings(submitHandler) {
    const filtersForm = document.querySelector(`.filters__form`);

    if (filtersForm) {
      const priceMin = filtersForm.querySelector(`#price-min`);
      const priceMax = filtersForm.querySelector(`#price-max`);
      const acousticCheckbox = filtersForm.querySelector(`#acoustic`);
      const electroCheckbox = filtersForm.querySelector(`#electro`);
      const ukuleleCheckbox = filtersForm.querySelector(`#ukulele`);
      const fourStringsCheckbox = filtersForm.querySelector(`#four-strings`);
      const sixStringsCheckbox = filtersForm.querySelector(`#six-strings`);
      const sevenStringsCheckbox = filtersForm.querySelector(`#seven-strings`);
      const twelveStringsCheckbox = filtersForm.querySelector(`#twelve-strings`);

      const comparePriceValues = (evt) => {
        if (parseInt(evt.target.value, 10) < 0) {
          evt.target.setCustomValidity(`Цена товара не может быть меньше 0`);
          evt.target.value = ``;
        } else {
          evt.target.setCustomValidity(``);
        }

        if (parseInt(priceMin.value, 10) > parseInt(priceMax.value, 10)) {
          const temp = priceMax.value;
          priceMax.value = priceMin.value;
          priceMin.value = temp;
        }
      };

      priceMin.addEventListener(`change`, (priceMinEvt) => {
        comparePriceValues(priceMinEvt);
      });

      priceMax.addEventListener(`change`, (priceMaxEvt) => {
        comparePriceValues(priceMaxEvt);
      });

      // Блокируем чекбоксы в зависимости от выбранных типов гитар
      const checkCheckboxState = () => {
        if (acousticCheckbox.checked && !electroCheckbox.checked && !ukuleleCheckbox.checked) {
          fourStringsCheckbox.setAttribute(`disabled`, `disabled`);
        } else if (!acousticCheckbox.checked && electroCheckbox.checked && !ukuleleCheckbox.checked) {
          twelveStringsCheckbox.setAttribute(`disabled`, `disabled`);
        } else if (!acousticCheckbox.checked && !electroCheckbox.checked && ukuleleCheckbox.checked) {
          sixStringsCheckbox.setAttribute(`disabled`, `disabled`);
          sevenStringsCheckbox.setAttribute(`disabled`, `disabled`);
          twelveStringsCheckbox.setAttribute(`disabled`, `disabled`);
        } else if (!acousticCheckbox.checked && electroCheckbox.checked && ukuleleCheckbox.checked) {
          twelveStringsCheckbox.setAttribute(`disabled`, `disabled`);
          sixStringsCheckbox.removeAttribute(`disabled`);
          sevenStringsCheckbox.removeAttribute(`disabled`);
        } else {
          fourStringsCheckbox.removeAttribute(`disabled`);
          sixStringsCheckbox.removeAttribute(`disabled`);
          sevenStringsCheckbox.removeAttribute(`disabled`);
          twelveStringsCheckbox.removeAttribute(`disabled`);
        }
      };

      acousticCheckbox.addEventListener(`change`, checkCheckboxState);
      electroCheckbox.addEventListener(`change`, checkCheckboxState);
      ukuleleCheckbox.addEventListener(`change`, checkCheckboxState);
      // ----------

      filtersForm.addEventListener(`submit`, (evt) => {
        evt.preventDefault();

        const formData = new FormData(filtersForm);

        let filterValues = {
          priceMin: null,
          priceMax: null,
          type: [],
          strings: []
        };

        if (formData.get(`price-min`)) {
          filterValues.priceMin = parseInt(formData.get(`price-min`), 10);
        }

        if (formData.get(`price-max`)) {
          filterValues.priceMax = parseInt(formData.get(`price-max`), 10);
        }

        if (formData.get(`acoustic`)) {
          filterValues.type.push(`акустическая гитара`);
        }

        if (formData.get(`electro`)) {
          filterValues.type.push(`электрогитара`);
        }

        if (formData.get(`ukulele`)) {
          filterValues.type.push(`укулеле`);
        }

        if (formData.get(`four-strings`)) {
          filterValues.strings.push(4);
        }

        if (formData.get(`six-strings`)) {
          filterValues.strings.push(6);
        }

        if (formData.get(`seven-strings`)) {
          filterValues.strings.push(7);
        }

        if (formData.get(`twelve-strings`)) {
          filterValues.strings.push(12);
        }

        submitHandler(filterValues);
      });
    }
  }
}

export const filters = new Filters();
