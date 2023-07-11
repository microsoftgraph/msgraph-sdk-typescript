import {Entity} from '../entity';
import {ExternalActivityType} from './externalActivityType';
import {Identity} from './identity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalActivity extends Entity, Parsable {
    /**
     * Represents an identity used to identify who is responsible for the activity.
     */
    performedBy?: Identity | undefined;
    /**
     * The date and time when the particular activity occurred. The DateTimeOffset type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    startDateTime?: Date | undefined;
    /**
     * The type property
     */
    type?: ExternalActivityType | undefined;
}
