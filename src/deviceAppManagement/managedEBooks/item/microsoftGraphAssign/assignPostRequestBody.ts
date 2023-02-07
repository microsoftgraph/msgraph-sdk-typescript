import {ManagedEBookAssignment} from '../../../../models/';
import {createManagedEBookAssignmentFromDiscriminatorValue} from '../../../../models/createManagedEBookAssignmentFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class AssignPostRequestBody implements AdditionalDataHolder, Parsable {
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
        this._additionalData = value;
    };
    /**
     * Instantiates a new assignPostRequestBody and sets the default values.
     */
    public constructor() {
        this._additionalData = {};
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "managedEBookAssignments": n => { this.managedEBookAssignments = n.getCollectionOfObjectValues<ManagedEBookAssignment>(createManagedEBookAssignmentFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the managedEBookAssignments property value. The managedEBookAssignments property
     * @returns a managedEBookAssignment
     */
    public get managedEBookAssignments() {
        return this._managedEBookAssignments;
    };
    /**
     * Sets the managedEBookAssignments property value. The managedEBookAssignments property
     * @param value Value to set for the managedEBookAssignments property.
     */
    public set managedEBookAssignments(value: ManagedEBookAssignment[] | undefined) {
        this._managedEBookAssignments = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeCollectionOfObjectValues<ManagedEBookAssignment>("managedEBookAssignments", this.managedEBookAssignments);
        writer.writeAdditionalData(this.additionalData);
    };
}
