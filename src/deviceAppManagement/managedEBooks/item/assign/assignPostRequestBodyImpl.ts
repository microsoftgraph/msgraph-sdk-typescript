import {ManagedEBookAssignmentImpl} from '../../../../models/';
import {createManagedEBookAssignmentFromDiscriminatorValue} from '../../../../models/createManagedEBookAssignmentFromDiscriminatorValue';
import {ManagedEBookAssignment} from '../../../../models/managedEBookAssignment';
import {AssignPostRequestBody} from './assignPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the assign method. */
export class AssignPostRequestBodyImpl implements AssignPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The managedEBookAssignments property */
    private _managedEBookAssignments?: ManagedEBookAssignment[] | undefined;
    /**
     * Gets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @returns a Record<string, unknown>
     */
    public get additionalData() {
        return this._additionalData;
    };
    /**
     * Sets the additionalData property value. Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     * @param value Value to set for the AdditionalData property.
     */
    public set additionalData(value: Record<string, unknown>) {
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new assignPostRequestBody and sets the default values.
     * @param assignPostRequestBodyParameterValue 
     */
    public constructor(assignPostRequestBodyParameterValue?: AssignPostRequestBody | undefined) {
        this._additionalData = assignPostRequestBodyParameterValue?.additionalData ? assignPostRequestBodyParameterValue?.additionalData! : {};
        this._managedEBookAssignments = assignPostRequestBodyParameterValue?.managedEBookAssignments;
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
     * Gets the managedEBookAssignments property value. The managedEBookAssignments property
     * @returns a ManagedEBookAssignmentInterface
     */
    public get managedEBookAssignments() {
        return this._managedEBookAssignments;
    };
    /**
     * Sets the managedEBookAssignments property value. The managedEBookAssignments property
     * @param value Value to set for the managedEBookAssignments property.
     */
    public set managedEBookAssignments(value: ManagedEBookAssignment[] | undefined) {
        if(value) {
            const managedEBookAssignmentsArrValue: ManagedEBookAssignmentImpl[] = [];
            this.managedEBookAssignments?.forEach(element => {
                managedEBookAssignmentsArrValue.push((element instanceof ManagedEBookAssignmentImpl? element:new ManagedEBookAssignmentImpl(element)));
            });
            this._managedEBookAssignments = managedEBookAssignmentsArrValue;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.managedEBookAssignments && this.managedEBookAssignments.length != 0){        const managedEBookAssignmentsArrValue: ManagedEBookAssignmentImpl[] = [];
        this.managedEBookAssignments?.forEach(element => {
            managedEBookAssignmentsArrValue.push((element instanceof ManagedEBookAssignmentImpl? element:new ManagedEBookAssignmentImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ManagedEBookAssignmentImpl>("managedEBookAssignments", managedEBookAssignmentsArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
