import { type Place } from './place';
import { type Room } from './room';
import { type Parsable } from '@microsoft/kiota-abstractions';

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
