import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryObject extends Entity, Partial<Parsable> {
    /** Date and time when this object was deleted. Always null when the object hasn't been deleted. */
    deletedDateTime?: Date | undefined;
}
