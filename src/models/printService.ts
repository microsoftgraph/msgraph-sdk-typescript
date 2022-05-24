import {Entity} from './entity';
import {PrintServiceEndpoint} from './printServiceEndpoint';

export interface PrintService extends Entity{
    /** Endpoints that can be used to access the service. Read-only. Nullable. */
    endpoints?:PrintServiceEndpoint[] | undefined;
}
