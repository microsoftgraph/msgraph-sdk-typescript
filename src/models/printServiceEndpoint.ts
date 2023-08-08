import type {Entity} from './entity';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface PrintServiceEndpoint extends Entity, Parsable {
    /**
     * A human-readable display name for the endpoint.
     */
    displayName?: string | undefined;
    /**
     * The URI that can be used to access the service.
     */
    uri?: string | undefined;
}
