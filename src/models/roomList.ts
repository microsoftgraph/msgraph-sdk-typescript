import {Place} from './place';
import {Room} from './room';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface RoomList extends Parsable, Place {
    /**
     * The email address of the room list.
     */
    emailAddress?: string | undefined;
    /**
     * The rooms property
     */
    rooms?: Room[] | undefined;
}
