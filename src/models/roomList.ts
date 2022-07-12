import {createRoomFromDiscriminatorValue} from './createRoomFromDiscriminatorValue';
import {Place, Room} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoomList extends Place implements Parsable {
    /** The email address of the room list. */
    private _emailAddress?: string | undefined;
    /** The rooms property */
    private _rooms?: Room[] | undefined;
    /**
     * Instantiates a new RoomList and sets the default values.
     */
    public constructor() {
        super();
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
        this._emailAddress = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "emailAddress": n => { this.emailAddress = n.getStringValue(); },
            "rooms": n => { this.rooms = n.getCollectionOfObjectValues<Room>(createRoomFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the rooms property value. The rooms property
     * @returns a room
     */
    public get rooms() {
        return this._rooms;
    };
    /**
     * Sets the rooms property value. The rooms property
     * @param value Value to set for the rooms property.
     */
    public set rooms(value: Room[] | undefined) {
        this._rooms = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeStringValue("emailAddress", this.emailAddress);
        writer.writeCollectionOfObjectValues<Room>("rooms", this.rooms);
    };
}
