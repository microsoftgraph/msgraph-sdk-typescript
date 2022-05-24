import {DeviceConfigurationAssignmentImpl} from '../../../../models/';
import {createDeviceConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/createDeviceConfigurationAssignmentFromDiscriminatorValue';
import {DeviceConfigurationAssignment} from '../../../../models/deviceConfigurationAssignment';
import {AssignResponse} from './assignResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignResponseImpl implements AdditionalDataHolder, AssignResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: DeviceConfigurationAssignment[] | undefined;
    /**
     * Instantiates a new assignResponse and sets the default values.
     * @param assignResponseParameterValue 
     */
    public constructor(assignResponseParameterValue?: AssignResponse | undefined) {
        this.additionalData = assignResponseParameterValue?.additionalData ? assignResponseParameterValue?.additionalData! : {}
        this.value = assignResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>(createDeviceConfigurationAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceConfigurationAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new DeviceConfigurationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceConfigurationAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
