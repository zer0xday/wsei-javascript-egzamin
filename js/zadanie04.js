document.addEventListener('DOMContentLoaded', () => {
    // 1
    const sampleClassElements = document.querySelectorAll('.sample_class');
    
    function getTagsOfElements(elements) {
        let tags = [];

        for (let item of elements) {
            tags.push(item.tagName);
        }

        return tags;
    }

    getTagsOfElements(sampleClassElements);

    // 2
    const sampleId = document.querySelector('#sample_id');

    function getClassesOfElement(element) {
        let classNames = element.className.split(' ');

        return classNames;
    }

    getClassesOfElement(sampleId);

    // 3
    const lists = document.querySelectorAll('ul.sample_clas_2 > li');

    function getInnerTextsOfElements(elements) {
        let texts = [];
        
        elements.forEach((el) => {
            texts.push(el.innerHTML);
        });

        return texts;
    }

    getInnerTextsOfElements(lists);

    // 4
    const links = document.querySelectorAll('a');

    function getAddressesOfElements(elements) {
        let linksArray = [];

        elements.forEach((link) => {
            if (link.href) {
                linksArray.push(link.href);
            }
        });

        return linksArray;
    }

    getAddressesOfElements(links);

    // 5
    const children = document.querySelector('.sample_class_3').children;
    getTagsOfElements(children);
});