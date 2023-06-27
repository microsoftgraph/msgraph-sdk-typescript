import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface LinkedResource extends Entity, Parsable {
    /**
     * The app name of the source that sends the linkedResource.
     */
    applicationName?: string | undefined;
    /**
     * The title of the linkedResource.
     */
    displayName?: string | undefined;
    /**
     * ID of the object that is associated with this task on the third-party/partner system.
     */
    externalId?: string | undefined;
    /**
     * Deep link to the linkedResource.
     */
    webUrl?: string | undefined;
}
