export function createPaginationItemTemplate(count) {
  return (
    `<li class="pagination__item">
      <a class="pagination__link" href="#"><span>${count}</span></a>
    </li>`
  );
}
