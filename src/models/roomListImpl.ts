import {createRoomFromDiscriminatorValue} from './createRoomFromDiscriminatorValue';
import {PlaceImpl, RoomImpl} from './index';
import {Room} from './room';
import {RoomList} from './roomList';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoomListImpl extends PlaceImpl implements RoomList {
    /** The email address of the room list. */
    private _emailAddress?: string | undefined;
    /** The rooms property */
    private _rooms?: Room[] | undefined;
    /**
     * Instantiates a new RoomList and sets the default values.
     * @param roomListParameterValue 
     */
    public constructor(roomListParameterValue?: RoomList | undefined) {
        super(roomListParameterValue);
        this._emailAddress = roomListParameterValue?.emailAddress;
        this._rooms = roomListParameterValue?.rooms;
    };
    /**
     * Gets the emailAddress property value. The email address of the room list.
     * @returns a string
     */
    public get emailAddress() {
        return this._emailAddress;
    };
    /**
     * Sets the emailAddress property value. The email address of the room list.
     * @param value Value to set for the emailAddress property.
     */
    public set emailAddress(value: string | undefined) {
        if(value) {
            this._emailAddress = value;
        }
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
     * Gets the rooms property value. The rooms property
     * @returns a RoomInterface
     */
    public get rooms() {
        return this._rooms;
    };
    /**
     * Sets the rooms property value. The rooms property
     * @param value Value to set for the rooms property.
     */
    public set rooms(value: Room[] | undefined) {
        if(value) {
            const roomsArrValue: RoomImpl[] = [];
            this.rooms?.forEach(element => {
                roomsArrValue.push((element instanceof RoomImpl? element:new RoomImpl(element)));
            });
            this._rooms = roomsArrValue;
        }
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
        if(this.rooms && this.rooms.length != 0){        const roomsArrValue: RoomImpl[] = [];
        this.rooms?.forEach(element => {
            roomsArrValue.push((element instanceof RoomImpl? element:new RoomImpl(element)));
        });
            writer.writeCollectionOfObjectValues<RoomImpl>("rooms", roomsArrValue);
        }
    };
}
