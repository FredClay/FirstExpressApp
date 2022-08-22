import PropTypes from 'prop-types';

const Character = (params) => {
    const { name, race, age} = params;

    return (
        <div>
            <hr></hr>
            <p>Name: {name}</p>
            <p>Race: {race}</p>
            <p>Age: {age}</p>
        </div>
    );
};

Character.defaultProps = {
     race: 'Mysterious'
}

Character.propTypes = {
    name: PropTypes.string.isRequired,
    race: PropTypes.string,
    age: PropTypes.number.isRequired,
}

export default Character