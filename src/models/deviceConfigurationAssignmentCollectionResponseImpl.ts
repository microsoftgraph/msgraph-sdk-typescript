import {createDeviceConfigurationAssignmentFromDiscriminatorValue} from './createDeviceConfigurationAssignmentFromDiscriminatorValue';
import {DeviceConfigurationAssignment} from './deviceConfigurationAssignment';
import {DeviceConfigurationAssignmentCollectionResponse} from './deviceConfigurationAssignmentCollectionResponse';
import {DeviceConfigurationAssignmentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class DeviceConfigurationAssignmentCollectionResponseImpl implements AdditionalDataHolder, DeviceConfigurationAssignmentCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: DeviceConfigurationAssignment[] | undefined;
    /**
     * Instantiates a new DeviceConfigurationAssignmentCollectionResponse and sets the default values.
     * @param deviceConfigurationAssignmentCollectionResponseParameterValue 
     */
    public constructor(deviceConfigurationAssignmentCollectionResponseParameterValue?: DeviceConfigurationAssignmentCollectionResponse | undefined) {
        this.additionalData = deviceConfigurationAssignmentCollectionResponseParameterValue?.additionalData ? deviceConfigurationAssignmentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = deviceConfigurationAssignmentCollectionResponseParameterValue?.nextLink ;
        this.value = deviceConfigurationAssignmentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceConfigurationAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceConfigurationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
