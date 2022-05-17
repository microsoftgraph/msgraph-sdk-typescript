import {TargetedManagedAppPolicyAssignmentImpl} from '../../../../../models/';
import {createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue} from '../../../../../models/createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue';
import {TargetedManagedAppPolicyAssignment} from '../../../../../models/targetedManagedAppPolicyAssignment';
import {AssignRequestBody} from './assignRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignRequestBodyImpl implements AdditionalDataHolder, AssignRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The assignments property */
    assignments?: TargetedManagedAppPolicyAssignment[] | undefined;
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
            "assignments": n => { this.assignments = n.getCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>(createTargetedManagedAppPolicyAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.assignments){
        const assignmentsArrValue: TargetedManagedAppPolicyAssignmentImpl[] = []; this.assignments?.forEach(element => {assignmentsArrValue.push(new TargetedManagedAppPolicyAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<TargetedManagedAppPolicyAssignmentImpl>("assignments", assignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
