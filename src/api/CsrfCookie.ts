import axios from 'axios';

const Csrf = async () => {
	try {
		const {data} = await axios.get('http://localhost:8000/sanctum/csrf-cookie', {withCredentials: true});
	} catch(err) {
		throw err;
	}
}

export default Csrf;