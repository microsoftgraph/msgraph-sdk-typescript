import {Place} from './place';
import {Room} from './room';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface RoomList extends Partial<AdditionalDataHolder>, Partial<Parsable>, Place {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The email address of the room list. */
    emailAddress?: string | undefined;
    /** The rooms property */
    rooms?: Room[] | undefined;
}
