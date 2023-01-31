import {createRoomListFromDiscriminatorValue} from './createRoomListFromDiscriminatorValue';
import {BaseCollectionPaginationCountResponse, RoomList} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoomListCollectionResponse extends BaseCollectionPaginationCountResponse implements Parsable {
    private _value?: RoomList[] | undefined;
    /**
     * Instantiates a new RoomListCollectionResponse and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "value": n => { this.value = n.getCollectionOfObjectValues<RoomList>(createRoomListFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeCollectionOfObjectValues<RoomList>("value", this.value);
    };
    /**
     * Gets the value property value. 
     * @returns a roomList
     */
    public get value() {
        return this._value;
    };
    /**
     * Sets the value property value. 
     * @param value Value to set for the value property.
     */
    public set value(value: RoomList[] | undefined) {
        this._value = value;
    };
}
