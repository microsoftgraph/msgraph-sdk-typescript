import {EnrollmentConfigurationAssignmentImpl} from '../../../../models/';
import {createEnrollmentConfigurationAssignmentFromDiscriminatorValue} from '../../../../models/createEnrollmentConfigurationAssignmentFromDiscriminatorValue';
import {EnrollmentConfigurationAssignment} from '../../../../models/enrollmentConfigurationAssignment';
import {AssignRequestBody} from './assignRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignRequestBodyImpl implements AdditionalDataHolder, AssignRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The enrollmentConfigurationAssignments property */
    enrollmentConfigurationAssignments?: EnrollmentConfigurationAssignment[] | undefined;
    /**
     * Instantiates a new assignRequestBody and sets the default values.
     * @param assignRequestBodyParameterValue 
     */
    public constructor(assignRequestBodyParameterValue?: AssignRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = assignRequestBodyParameterValue?.additionalData ? {} : assignRequestBodyParameterValue?.additionalData!
        this.enrollmentConfigurationAssignments = assignRequestBodyParameterValue?.enrollmentConfigurationAssignments ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "enrollmentConfigurationAssignments": n => { this.enrollmentConfigurationAssignments = n.getCollectionOfObjectValues<EnrollmentConfigurationAssignmentImpl>(createEnrollmentConfigurationAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.enrollmentConfigurationAssignments){
        const enrollmentConfigurationAssignmentsArrValue: EnrollmentConfigurationAssignmentImpl[] = []; this.enrollmentConfigurationAssignments?.forEach(element => {enrollmentConfigurationAssignmentsArrValue.push(new EnrollmentConfigurationAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<EnrollmentConfigurationAssignmentImpl>("enrollmentConfigurationAssignments", enrollmentConfigurationAssignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
