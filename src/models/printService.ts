import {Entity} from './entity';
import {PrintServiceEndpoint} from './printServiceEndpoint';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintService extends Entity, Parsable {
    /**
     * Endpoints that can be used to access the service. Read-only. Nullable.
     */
    endpoints?: PrintServiceEndpoint[] | undefined;
}
