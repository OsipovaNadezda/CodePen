const cityId = document.querySelector('#city');

const cityArr = {
    rus: ['Москва', 'Санк-Петербург', 'Новосибирск', 'Екатеринбург', 'Нижний Новгород', 'Казань', 'Челябинск'],
    uk: ['Киев', 'Харьков', 'Одесса', 'Днепр', 'Донецк', 'Запорожье', 'Львов'],
    bel: ['Минск', 'Гомель', 'Могилёв', 'Витебск', 'Гродно', 'Брест'],
    jap: ['Токио', 'Киото', 'Осака', 'Иокогама']

}
let nameCountry = '';
let nameCity = '';
document.querySelector('#country').addEventListener('change', function (event) {
    console.log(event);
    let target = event.target;

    nameCountry = target.options[target.selectedIndex].textContent;
    cityId.innerHTML = '';
    cityArr[event.target.value].forEach(item => {
        let el= document.createElement('option');
        el.textContent = item;
        cityId.append(el);
    });
});

const result = document.querySelector('.result');

cityId.addEventListener('change', function(event){

})