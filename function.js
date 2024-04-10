window.function = async function(key1, jsonstring) {
    if (jsonstring.value === undefined || jsonstring.value === '') return "En attente json...";
    let json = JSON.parse(jsonstring.value);
    let apikey = key1.value;
    console.log("apikey:", apikey);
    const apiUrl = json.url;
    const headers = {"X-CMC_PRO_API_KEY":"${apikey}","Accept":"application/json"};
    console.log("headers:", headers);
    const requestOptions = { 
        method:'GET',
        headers: headers
 };
    console.log("apiUrl:", apiUrl);
    console.log("requestOptions:", requestOptions);
    try {
        let response = await fetch(apiUrl,requestOptions); // await here
        console.log("response:", response);
        const text = await response.text();
        console.log("text:", text);
        return text;
    } catch (error) {
        console.error("Error:", error);
        return "Error fetching data"; // Handle error accordingly
    }
};
