import {DirectoryObject} from './directoryObject';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Endpoint extends DirectoryObject, Parsable {
    /**
     * The capability property
     */
    capability?: string | undefined;
    /**
     * The providerId property
     */
    providerId?: string | undefined;
    /**
     * The providerName property
     */
    providerName?: string | undefined;
    /**
     * The providerResourceId property
     */
    providerResourceId?: string | undefined;
    /**
     * The uri property
     */
    uri?: string | undefined;
}
