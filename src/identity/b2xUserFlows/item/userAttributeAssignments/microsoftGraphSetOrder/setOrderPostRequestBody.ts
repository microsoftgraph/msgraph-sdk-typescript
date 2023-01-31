import {AssignmentOrder} from '../../../../../models/';
import {createAssignmentOrderFromDiscriminatorValue} from '../../../../../models/createAssignmentOrderFromDiscriminatorValue';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class SetOrderPostRequestBody implements AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    private _newAssignmentOrder?: AssignmentOrder | undefined;
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
     * Instantiates a new setOrderPostRequestBody and sets the default values.
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
            "newAssignmentOrder": n => { this.newAssignmentOrder = n.getObjectValue<AssignmentOrder>(createAssignmentOrderFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the newAssignmentOrder property value. 
     * @returns a assignmentOrder
     */
    public get newAssignmentOrder() {
        return this._newAssignmentOrder;
    };
    /**
     * Sets the newAssignmentOrder property value. 
     * @param value Value to set for the newAssignmentOrder property.
     */
    public set newAssignmentOrder(value: AssignmentOrder | undefined) {
        this._newAssignmentOrder = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        writer.writeObjectValue<AssignmentOrder>("newAssignmentOrder", this.newAssignmentOrder);
        writer.writeAdditionalData(this.additionalData);
    };
}
