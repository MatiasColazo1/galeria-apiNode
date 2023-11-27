import app from './app'
import { startConection } from './database';

async function main() {
    startConection();
    await app.listen(app.get('port'));
    console.log('Server en el puerto: ', app.get('port'))
}

main()