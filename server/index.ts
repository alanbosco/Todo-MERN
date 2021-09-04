import { app } from './src/app'
import { AddressInfo } from 'net'
const PORT = process.env.PORT || 5000

const server = app.listen(PORT, () => {
    const { port, address } = server.address() as AddressInfo;
    console.log('Server listening on:', 'http://' + address + ':' + port);
});