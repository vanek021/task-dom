/*
  В функцию appendToBody передаются 3 параметра:
  tag - имя тега, content - содержимое тега и count - количество вставок.
  Необходимо, чтобы функция осуществила вставку на страницу указанный тег с указанным содержимым указанное число раз.
  Считаем, что всегда передается тег, допускающий вставку текста в качестве своего содержимого (P, DIV, I и пр.).
*/
export function appendToBody(tag, content, count) {
    const elem = `<${tag}>${content}</${tag}>`;

    for (let i = 0; i < count; i++)
        document.body.insertAdjacentHTML('afterbegin', elem);
}

/*
  Создайте дерево вложенных тегов DIV.
  Каждый узел дерева должен содержать childrenCount узлов.
  Глубина дерева задается параметром level.
  Каждый элемент должен иметь класс вида item_n, где n - глубина вложенности элемента. (Нумерацию ведем с единицы).
  Сформированное дерево верните в качестве результата работы функции.
*/
export function generateTree(childrenCount, level) {
    let result = document.createElement('div');
    result.classList.add('item_1');
    generateTreeRecursion(result, childrenCount, level, 2);
    return result;
}

function generateTreeRecursion(root, childrenCount, level, thisLevel) {
    for (let i = 0; i < childrenCount; i++) {
        let element = document.createElement('div');
        element.classList.add(`item_${thisLevel}`);
        root.appendChild(element);
        if (thisLevel < level)
            generateTreeRecursion(element, childrenCount, level, thisLevel + 1);
    }
}
/*
  Используйте функцию для создания дерева тегов DIV из предыдущего задания.
  Создайте дерево с вложенностью 3 и числом элементов в каждом узле 2.
  Далее замените все узлы второго уровня (т.е. имеющие класс item_2) на теги SECTION.
  Остальную структуру дерева сохраните неизменной, включая классы и те элементы,
  которые находились внутри переписанных тегов.
  Сформированное дерево верните в качестве результата работы функции.
*/
export function replaceNodes() {
    let result = generateTree(2, 3);
    let nodesToReplace = result.querySelectorAll('.item_2');

    for (let element of nodesToReplace) {
        let item = document.createElement('section');
        item.innerHTML = element.innerHTML;
        item.classList.add('item_2');
        result.replaceChild(item, element);
    }

    return result;
}
