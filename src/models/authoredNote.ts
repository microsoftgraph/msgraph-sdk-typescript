import type {Entity} from './entity';
import type {Identity} from './identity';
import type {ItemBody} from './itemBody';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface AuthoredNote extends Entity, Parsable {
    /**
     * Identity information about the note's author.
     */
    author?: Identity | undefined;
    /**
     * The content of the note.
     */
    content?: ItemBody | undefined;
    /**
     * The date and time when the entity was created. The Timestamp type represents date and time information using ISO 8601 format and is always in UTC time. For example, midnight UTC on Jan 1, 2014 is 2014-01-01T00:00:00Z.
     */
    createdDateTime?: Date | undefined;
}
