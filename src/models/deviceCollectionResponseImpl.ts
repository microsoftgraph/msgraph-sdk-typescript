import {createDeviceFromDiscriminatorValue} from './createDeviceFromDiscriminatorValue';
import {Device} from './device';
import {DeviceCollectionResponse} from './deviceCollectionResponse';
import {DeviceImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceCollectionResponseImpl implements AdditionalDataHolder, DeviceCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Device[] | undefined;
    /**
     * Instantiates a new DeviceCollectionResponse and sets the default values.
     * @param deviceCollectionResponseParameterValue 
     */
    public constructor(deviceCollectionResponseParameterValue?: DeviceCollectionResponse | undefined) {
        this.additionalData = deviceCollectionResponseParameterValue?.additionalData ? deviceCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceCollectionResponseParameterValue?.nextLink ;
        this.value = deviceCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceImpl>(createDeviceFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
