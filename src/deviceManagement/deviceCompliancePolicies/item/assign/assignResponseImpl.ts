import {DeviceCompliancePolicyAssignmentImpl} from '../../../../models/';
import {createDeviceCompliancePolicyAssignmentFromDiscriminatorValue} from '../../../../models/createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import {DeviceCompliancePolicyAssignment} from '../../../../models/deviceCompliancePolicyAssignment';
import {AssignResponse} from './assignResponse';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignResponseImpl implements AssignResponse {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The value property */
    public value?: DeviceCompliancePolicyAssignment[] | undefined;
    /**
     * Instantiates a new assignResponse and sets the default values.
     * @param assignResponseParameterValue 
     */
    public constructor(assignResponseParameterValue?: AssignResponse | undefined) {
        this.additionalData = assignResponseParameterValue?.additionalData ? assignResponseParameterValue?.additionalData! : {};
        const valueArrValue: DeviceCompliancePolicyAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof DeviceCompliancePolicyAssignmentImpl? element : new DeviceCompliancePolicyAssignmentImpl(element));});
        this.value = valueArrValue;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "value": n => { this.value = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.value && this.value.length != 0){        const valueArrValue: DeviceCompliancePolicyAssignmentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(element instanceof DeviceCompliancePolicyAssignmentImpl? element : new DeviceCompliancePolicyAssignmentImpl(element));});
            writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
