const Country = ({country}) => {
    // console.log(country);

    return (
        <div className='countryInfo'>
            <img className='flagsImg' src={country.flags.png} alt={country.flags.alt} />
            <h1 className='countryName'>Country Name: {country.name.common}</h1>
            <p className='capitalName'>Capital: {country.capital}</p>
            <p className='regionName'>Region: {country.region}</p>
        </div>
    );
};

export default Country;



// ======================> Chat GPT <===============================

// const Country = ({ country }) => {
//     return (
//       <div>
//         <h1>Country Name: {country?.name?.common}</h1>
//         <img src={country?.flags?.png} alt={country?.flags?.alt} />
//         {/* Display other data you need */}
//         <p>Capital: {country?.capital}</p>
//         <p>Region: {country?.region}</p>
//       </div>
//     );
//   };
  
//   export default Countries;