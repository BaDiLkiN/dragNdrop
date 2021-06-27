const item = document.querySelector('.item'),
  placeholders = document.querySelectorAll('.placeholder');

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (const placeholder of placeholders) {
  placeholder.addEventListener('dragover', dragover);
  placeholder.addEventListener('dragenter', dragenter);
  placeholder.addEventListener('dragleave', dragleave);
  placeholder.addEventListener('drop', dragDrop);
}

function dragStart(e) {
  e = e.target;
  e.classList.add('hold');
  setTimeout(() => {
    e.classList.add('hide');
  }, 0);
}

function dragEnd(e) {
  e = e.target;
  e.classList.remove('hold', 'hide');
}

function dragover(e) {
  e.preventDefault();
}

function dragenter(e) {
  e.target.classList.add('hovered');
}

function dragleave(e) {
  e.target.classList.remove('hovered');
}

function dragDrop(e) {
  e.target.classList.remove('hovered');
  e.target.append(item);
  item.classList.remove('hovered');
}
