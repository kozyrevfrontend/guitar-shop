class PromoCode {
  usePromoCode(submitHandler) {
    const form = document.querySelector(`.discount__form`);

    if (form) {
      const button = form.querySelector(`.discount__button`);

      button.addEventListener(`click`, (evt) => {
        evt.preventDefault();

        const formData = new FormData(form);
        let code = null;

        if (formData.get(`discount`)) {
          code = formData.get(`discount`).toLowerCase();
        }

        submitHandler(code);
      });
    }
  }
}

export const promoCode = new PromoCode();
