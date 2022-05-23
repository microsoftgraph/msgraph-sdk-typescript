import {createDeviceConfigurationUserStatusFromDiscriminatorValue} from './createDeviceConfigurationUserStatusFromDiscriminatorValue';
import {DeviceConfigurationUserStatus} from './deviceConfigurationUserStatus';
import {DeviceConfigurationUserStatusCollectionResponse} from './deviceConfigurationUserStatusCollectionResponse';
import {DeviceConfigurationUserStatusImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceConfigurationUserStatusCollectionResponseImpl implements AdditionalDataHolder, DeviceConfigurationUserStatusCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceConfigurationUserStatus[] | undefined;
    /**
     * Instantiates a new DeviceConfigurationUserStatusCollectionResponse and sets the default values.
     * @param deviceConfigurationUserStatusCollectionResponseParameterValue 
     */
    public constructor(deviceConfigurationUserStatusCollectionResponseParameterValue?: DeviceConfigurationUserStatusCollectionResponse | undefined) {
        this.additionalData = deviceConfigurationUserStatusCollectionResponseParameterValue?.additionalData ? deviceConfigurationUserStatusCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceConfigurationUserStatusCollectionResponseParameterValue?.nextLink ;
        this.value = deviceConfigurationUserStatusCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceConfigurationUserStatusImpl>(createDeviceConfigurationUserStatusFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceConfigurationUserStatusImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceConfigurationUserStatusImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationUserStatusImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
