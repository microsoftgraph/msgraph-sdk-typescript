import {createRoomFromDiscriminatorValue} from './createRoomFromDiscriminatorValue';
import {RoomImpl} from './index';
import {Room} from './room';
import {RoomCollectionResponse} from './roomCollectionResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class RoomCollectionResponseImpl implements RoomCollectionResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Room[] | undefined;
    /**
     * Instantiates a new RoomCollectionResponse and sets the default values.
     * @param roomCollectionResponseParameterValue 
     */
    public constructor(roomCollectionResponseParameterValue?: RoomCollectionResponse | undefined) {
        this.additionalData = roomCollectionResponseParameterValue?.additionalData ? roomCollectionResponseParameterValue?.additionalData! : {};
        this.nextLink = roomCollectionResponseParameterValue?.nextLink;
        this.value = roomCollectionResponseParameterValue?.value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<RoomImpl>(createRoomFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
            writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: RoomImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new RoomImpl(element));});
            writer.writeCollectionOfObjectValues<RoomImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
