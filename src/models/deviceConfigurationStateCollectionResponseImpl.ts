import {createDeviceConfigurationStateFromDiscriminatorValue} from './createDeviceConfigurationStateFromDiscriminatorValue';
import {DeviceConfigurationState} from './deviceConfigurationState';
import {DeviceConfigurationStateCollectionResponse} from './deviceConfigurationStateCollectionResponse';
import {DeviceConfigurationStateImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceConfigurationStateCollectionResponseImpl implements AdditionalDataHolder, DeviceConfigurationStateCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceConfigurationState[] | undefined;
    /**
     * Instantiates a new DeviceConfigurationStateCollectionResponse and sets the default values.
     * @param deviceConfigurationStateCollectionResponseParameterValue 
     */
    public constructor(deviceConfigurationStateCollectionResponseParameterValue?: DeviceConfigurationStateCollectionResponse | undefined) {
        this.additionalData = deviceConfigurationStateCollectionResponseParameterValue?.additionalData ? deviceConfigurationStateCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceConfigurationStateCollectionResponseParameterValue?.nextLink ;
        this.value = deviceConfigurationStateCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceConfigurationStateImpl>(createDeviceConfigurationStateFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceConfigurationStateImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceConfigurationStateImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationStateImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
