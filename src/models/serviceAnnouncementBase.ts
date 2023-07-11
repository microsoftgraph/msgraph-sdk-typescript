import {Entity} from './entity';
import {KeyValuePair} from './keyValuePair';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceAnnouncementBase extends Entity, Parsable {
    /**
     * Additional details about service event. This property doesn't support filters.
     */
    details?: KeyValuePair[] | undefined;
    /**
     * The end time of the service event.
     */
    endDateTime?: Date | undefined;
    /**
     * The last modified time of the service event.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * The start time of the service event.
     */
    startDateTime?: Date | undefined;
    /**
     * The title of the service event.
     */
    title?: string | undefined;
}
