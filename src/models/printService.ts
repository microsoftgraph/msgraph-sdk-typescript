import { type Entity } from './entity';
import { type PrintServiceEndpoint } from './printServiceEndpoint';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface PrintService extends Entity, Parsable {
    /**
     * Endpoints that can be used to access the service. Read-only. Nullable.
     */
    endpoints?: PrintServiceEndpoint[] | undefined;
}
