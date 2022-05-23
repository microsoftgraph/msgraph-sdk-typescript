import {createDeviceConfigurationFromDiscriminatorValue} from './createDeviceConfigurationFromDiscriminatorValue';
import {DeviceConfiguration} from './deviceConfiguration';
import {DeviceConfigurationCollectionResponse} from './deviceConfigurationCollectionResponse';
import {DeviceConfigurationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceConfigurationCollectionResponseImpl implements AdditionalDataHolder, DeviceConfigurationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceConfiguration[] | undefined;
    /**
     * Instantiates a new DeviceConfigurationCollectionResponse and sets the default values.
     * @param deviceConfigurationCollectionResponseParameterValue 
     */
    public constructor(deviceConfigurationCollectionResponseParameterValue?: DeviceConfigurationCollectionResponse | undefined) {
        this.additionalData = deviceConfigurationCollectionResponseParameterValue?.additionalData ? deviceConfigurationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceConfigurationCollectionResponseParameterValue?.nextLink ;
        this.value = deviceConfigurationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceConfigurationImpl>(createDeviceConfigurationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceConfigurationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceConfigurationImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
