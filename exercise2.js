const countries = [
	{
		country:"US",
		languages: ["en"]
	},
	{
		country:"BE",
		languages: ["nl","fr","de"]
	},
	{
		country:"NL",
		languages: ["nl"]
	},
	{
		country:"DE",
		languages: ["de"]
	},
	{
		country:"ES",
		languages: ["es"]
	}
];


function getNumberOfCountries() {
	let count = 0;
	
	for (let i = 0; i < countries.length; i++) {
		count++;		
	}

	return count;
}

function getCountryWithMoreLanguges() {
	let resCountry = '';
	let maxLanguages = 0;
	
	countries.forEach(country => {
		if (country.languages.length > maxLanguages) {
			maxLanguages = country.languages.length;
			resCountry = country.country;
		}
	});
	
	return resCountry;
}

function getCountryWIthMoreLanguagesWhere(targetLanguage) {
	const resCountry = {
		name: '',
		numberOfLanguages: 0		
	};

	countries.forEach(country => {
		country.languages.forEach(language => {
			if (language === targetLanguage) {				
				if ( country.languages.length > resCountry.numberOfLanguages) {
					resCountry.name = country.country;
					resCountry.numberOfLanguages = country.languages.length;
				}
			}
		})
	});
	
	return resCountry;
}

function getMostCommonLanguagesInCountries() {
	const langs = {};
	
	countries.forEach(country => {
		country.languages.forEach(language => {
			if (!(language in langs)) {
				langs[language] = 1;
			}
			else {
				langs[language]++;	
			}
		});
	})

	const langArr = Object.entries(langs).map(([k, v]) => ({
		lang: k,
		val: v
	}));

	let arr = Object.values(langs);
	let maxQuantity = Math.max(...arr);
	
	return langArr.filter(language => language.val === maxQuantity);
}

console.log(getNumberOfCountries());
console.log(getCountryWithMoreLanguges());
console.log(getCountryWIthMoreLanguagesWhere('es'));
console.log(getMostCommonLanguagesInCountries());