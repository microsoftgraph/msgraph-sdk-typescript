import {ManagedEBookAssignmentImpl} from '../../../../models/';
import {createManagedEBookAssignmentFromDiscriminatorValue} from '../../../../models/createManagedEBookAssignmentFromDiscriminatorValue';
import {ManagedEBookAssignment} from '../../../../models/managedEBookAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignPostRequestBodyImpl implements AdditionalDataHolder, AssignPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The managedEBookAssignments property */
    public managedEBookAssignments?: ManagedEBookAssignment[] | undefined;
    /**
     * Instantiates a new assignPostRequestBody and sets the default values.
     * @param assignPostRequestBodyParameterValue 
     */
    public constructor(assignPostRequestBodyParameterValue?: AssignPostRequestBody | undefined) {
        this.additionalData = assignPostRequestBodyParameterValue?.additionalData ? assignPostRequestBodyParameterValue?.additionalData! : {}
        this.managedEBookAssignments = assignPostRequestBodyParameterValue?.managedEBookAssignments ;
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
        if(this.managedEBookAssignments && this.managedEBookAssignments.length != 0){        const managedEBookAssignmentsArrValue: ManagedEBookAssignmentImpl[] = []; this.managedEBookAssignments?.forEach(element => {managedEBookAssignmentsArrValue.push(new ManagedEBookAssignmentImpl(element));});
        writer.writeCollectionOfObjectValues<ManagedEBookAssignmentImpl>("managedEBookAssignments", managedEBookAssignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
