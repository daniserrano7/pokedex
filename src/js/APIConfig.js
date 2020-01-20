const APIConfig = () => {
    const port = 8000;
    const route = 'api/v1';
    //const url = `${window.location.protocol}//${window.location.hostname}:${port}/${route}`;
    const url = `http://192.168.0.28:${port}/${route}`;

    return url
}

export default APIConfig;