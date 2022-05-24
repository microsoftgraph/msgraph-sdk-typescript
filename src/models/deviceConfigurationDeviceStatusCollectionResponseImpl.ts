import {createDeviceConfigurationDeviceStatusFromDiscriminatorValue} from './createDeviceConfigurationDeviceStatusFromDiscriminatorValue';
import {DeviceConfigurationDeviceStatus} from './deviceConfigurationDeviceStatus';
import {DeviceConfigurationDeviceStatusCollectionResponse} from './deviceConfigurationDeviceStatusCollectionResponse';
import {DeviceConfigurationDeviceStatusImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceConfigurationDeviceStatusCollectionResponseImpl implements AdditionalDataHolder, DeviceConfigurationDeviceStatusCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceConfigurationDeviceStatus[] | undefined;
    /**
     * Instantiates a new DeviceConfigurationDeviceStatusCollectionResponse and sets the default values.
     * @param deviceConfigurationDeviceStatusCollectionResponseParameterValue 
     */
    public constructor(deviceConfigurationDeviceStatusCollectionResponseParameterValue?: DeviceConfigurationDeviceStatusCollectionResponse | undefined) {
        this.additionalData = deviceConfigurationDeviceStatusCollectionResponseParameterValue?.additionalData ? deviceConfigurationDeviceStatusCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceConfigurationDeviceStatusCollectionResponseParameterValue?.nextLink ;
        this.value = deviceConfigurationDeviceStatusCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceConfigurationDeviceStatusImpl>(createDeviceConfigurationDeviceStatusFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceConfigurationDeviceStatusImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceConfigurationDeviceStatusImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationDeviceStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
