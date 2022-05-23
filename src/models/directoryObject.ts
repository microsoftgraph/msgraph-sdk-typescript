import {Entity} from './entity';

export interface DirectoryObject extends Entity{
    /** Date and time when this object was deleted. Always null when the object hasn't been deleted. */
    deletedDateTime?:Date | undefined;
}
