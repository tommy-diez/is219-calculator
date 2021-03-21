const City = require('../src/Models/City');
let city = {
    id: 0,
    city: "Newark",
    city_ascii: "EWR",
    lat: 2,
    lng: 3,
    iso2: 4,
    iso3: 5,
    capital: "",
    admin_name: "Baraka"
};

test('Instantiating object of city class', function(){

    let newark = City.create(city);
    expect(newark).toBeInstanceOf(City);

});

test('City attributes are passed to city objects', function(){

    let newark = City.create(city);
    expect(newark.id).toBe(0);
    expect(newark.city).toBe("Newark");
    expect(newark.city_ascii).toBe("EWR");
    expect(newark.lat).toBe(2);
    expect(newark.lng).toBe(3);
    expect(newark.iso2).toBe(4);
    expect(newark.iso3).toBe(5);
    expect(newark.capital).toBe("");
    expect(newark.admin_name).toBe("Baraka");

});
