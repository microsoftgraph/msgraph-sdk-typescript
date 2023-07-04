import {Entity} from './entity';
import {IdentitySet} from './identitySet';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationOutcome extends Entity, Parsable {
    /**
     * The individual who updated the resource.
     */
    lastModifiedBy?: IdentitySet | undefined;
    /**
     * The moment in time when the resource was last modified. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2021 is 2021-01-01T00:00:00Z.
     */
    lastModifiedDateTime?: Date | undefined;
}
