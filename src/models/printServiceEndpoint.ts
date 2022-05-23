import {Entity} from './entity';

export interface PrintServiceEndpoint extends Entity{
    /** A human-readable display name for the endpoint. */
    displayName?:string | undefined;
    /** The URI that can be used to access the service. */
    uri?:string | undefined;
}
