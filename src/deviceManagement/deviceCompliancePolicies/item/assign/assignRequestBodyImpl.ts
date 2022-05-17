import {DeviceCompliancePolicyAssignmentImpl} from '../../../../models/';
import {createDeviceCompliancePolicyAssignmentFromDiscriminatorValue} from '../../../../models/createDeviceCompliancePolicyAssignmentFromDiscriminatorValue';
import {DeviceCompliancePolicyAssignment} from '../../../../models/deviceCompliancePolicyAssignment';
import {AssignRequestBody} from './assignRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignRequestBodyImpl implements AdditionalDataHolder, AssignRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The assignments property */
    assignments?: DeviceCompliancePolicyAssignment[] | undefined;
    /**
     * Instantiates a new assignRequestBody and sets the default values.
     * @param assignRequestBodyParameterValue 
     */
    public constructor(assignRequestBodyParameterValue?: AssignRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = assignRequestBodyParameterValue?.additionalData ? {} : assignRequestBodyParameterValue?.additionalData!
        this.assignments = assignRequestBodyParameterValue?.assignments ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>(createDeviceCompliancePolicyAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.assignments){
        const assignmentsArrValue: DeviceCompliancePolicyAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new DeviceCompliancePolicyAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<DeviceCompliancePolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
