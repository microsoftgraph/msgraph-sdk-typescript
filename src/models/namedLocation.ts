import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface NamedLocation extends Entity, Parsable {
    /**
     * The Timestamp type represents creation date and time of the location using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * Human-readable name of the location.
     */
    displayName?: string | undefined;
    /**
     * The Timestamp type represents last modified date and time of the location using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z. Read-only.
     */
    modifiedDateTime?: Date | undefined;
}
