import { constants } from '../constants';

class ServiceFetch{
    getPatients(){
        return fetch(constants.GET_ALL_PATIENTS_REST_API_URL).then((res => res.json()));
    }
}

export default new ServiceFetch();