// dette er for å konfigurere og gjenbruke.
import sanityClient from '@sanity/client';

// husk liten p for process.
const options = {
    projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
    dataset: process.env.REACT_APP_SANITY_DATASET_NAME,
};

// REFERE TIL

const client = sanityClient({
    ...options,
    useCdn: process.env.NODE_ENV === 'production', // CACHER// gjør at prosesser fortere/ dette er boolean.
});

export default client;