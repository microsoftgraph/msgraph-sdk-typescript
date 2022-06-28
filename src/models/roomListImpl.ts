import {createRoomFromDiscriminatorValue} from './createRoomFromDiscriminatorValue';
import {PlaceImpl, RoomImpl} from './index';
import {Room} from './room';
import {RoomList} from './roomList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoomListImpl extends PlaceImpl implements RoomList {
    /** The email address of the room list. */
    public emailAddress?: string | undefined;
    /** The rooms property */
    public rooms?: Room[] | undefined;
    /**
     * Instantiates a new RoomList and sets the default values.
     * @param roomListParameterValue 
     */
    public constructor(roomListParameterValue?: RoomList | undefined) {
        super(roomListParameterValue);
        this.emailAddress = roomListParameterValue?.emailAddress;
        this.rooms = roomListParameterValue?.rooms;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "rooms": n => { this.rooms = n.getCollectionOfObjectValues<RoomImpl>(createRoomFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.emailAddress){
            writer.writeStringValue("emailAddress", this.emailAddress);
        }
        if(this.rooms && this.rooms.length != 0){        const roomsArrValue: RoomImpl[] = []; this.rooms?.forEach(element => {roomsArrValue.push(new RoomImpl(element));});
            writer.writeCollectionOfObjectValues<RoomImpl>("rooms", roomsArrValue);
        }
    };
}
