import {ManagedEBookAssignmentImpl} from '../../../../models/';
import {createManagedEBookAssignmentFromDiscriminatorValue} from '../../../../models/createManagedEBookAssignmentFromDiscriminatorValue';
import {ManagedEBookAssignment} from '../../../../models/managedEBookAssignment';
import {AssignRequestBody} from './assignRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method.  */
export class AssignRequestBodyImpl implements AdditionalDataHolder, AssignRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The managedEBookAssignments property  */
    managedEBookAssignments?: ManagedEBookAssignment[] | undefined;
    /**
     * Instantiates a new assignRequestBody and sets the default values.
     * @param assignRequestBodyParameterValue 
     */
    public constructor(assignRequestBodyParameterValue?: AssignRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = assignRequestBodyParameterValue?.additionalData ? {} : assignRequestBodyParameterValue?.additionalData!
        this.managedEBookAssignments = assignRequestBodyParameterValue?.managedEBookAssignments ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "managedEBookAssignments": n => { this.managedEBookAssignments = n.getCollectionOfObjectValues<ManagedEBookAssignmentImpl>(createManagedEBookAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.managedEBookAssignments){
        const managedEBookAssignmentsArrValue: ManagedEBookAssignmentImpl[] = []; this.managedEBookAssignments?.forEach(element => {managedEBookAssignmentsArrValue.push(new ManagedEBookAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedEBookAssignmentImpl>("managedEBookAssignments", managedEBookAssignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
