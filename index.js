function check() {
    let x = document.forms["Regform"]["fname"].value;
    if (x === "") {
        alert("Please enter your name");
        return false;
    } else {
        window.location.href = "output.html";
    }
}



function populateStates() {
    var countrySelect = document.getElementById("country");
    var stateSelect = document.getElementById("state");
    var selectedCountry = countrySelect.value;

    stateSelect.innerHTML = "<option value=''>Select a state</option>";

    if (selectedCountry === "India") {
        var indianStates = ["Andhra Pradesh", "Tamil Nadu", "Karnataka", "Maharashtra", "Kerala"];
        indianStates.forEach(function (state) {
            var option = document.createElement("option");
            option.value = state;
            option.text = state;
            stateSelect.appendChild(option);
        });
    } else if (selectedCountry === "USA") {
        var usStates = ["California", "New York", "Texas", "Florida", "Illinois"];
        usStates.forEach(function (state) {
            var option = document.createElement("option");
            option.value = state;
            option.text = state;
            stateSelect.appendChild(option);
        });
    } else if (selectedCountry === "UK") {
        var ukCounties = ["England", "Scotland", "Wales", "Northern Ireland"];
        ukCounties.forEach(function (state) {
            var option = document.createElement("option");
            option.value = state;
            option.text = state;
            stateSelect.appendChild(option);
        });
    } else if (selectedCountry === "Germany") {
        var germanStates = ["Berlin", "Bavaria", "Hamburg", "Lower Saxony", "North Rhine-Westphalia"];
        germanStates.forEach(function (state) {
            var option = document.createElement("option");
            option.value = state;
            option.text = state;
            stateSelect.appendChild(option);
        });
    } else if (selectedCountry === "France") {
        var frenchRegions = ["Île-de-France", "Provence-Alpes-Côte d'Azur", "Auvergne-Rhône-Alpes", "Occitanie", "Nouvelle-Aquitaine"];
        frenchRegions.forEach(function (state) {
            var option = document.createElement("option");
            option.value = state;
            option.text = state;
            stateSelect.appendChild(option);
        });
    }
}