import {AssignmentOrderImpl} from '../../../../../models/';
import {AssignmentOrder} from '../../../../../models/assignmentOrder';
import {createAssignmentOrderFromDiscriminatorValue} from '../../../../../models/createAssignmentOrderFromDiscriminatorValue';
import {SetOrderPostRequestBody} from './setOrderPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setOrder method. */
export class SetOrderPostRequestBodyImpl implements SetOrderPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    private _additionalData: Record<string, unknown>;
    /** The newAssignmentOrder property */
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
        if(value) {
            this._additionalData = value;
        }
    };
    /**
     * Instantiates a new setOrderPostRequestBody and sets the default values.
     * @param setOrderPostRequestBodyParameterValue 
     */
    public constructor(setOrderPostRequestBodyParameterValue?: SetOrderPostRequestBody | undefined) {
        this._additionalData = setOrderPostRequestBodyParameterValue?.additionalData ? setOrderPostRequestBodyParameterValue?.additionalData! : {};
        this._newAssignmentOrder = setOrderPostRequestBodyParameterValue?.newAssignmentOrder;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "newAssignmentOrder": n => { this.newAssignmentOrder = n.getObjectValue<AssignmentOrderImpl>(createAssignmentOrderFromDiscriminatorValue); },
        };
    };
    /**
     * Gets the newAssignmentOrder property value. The newAssignmentOrder property
     * @returns a AssignmentOrderInterface
     */
    public get newAssignmentOrder() {
        return this._newAssignmentOrder;
    };
    /**
     * Sets the newAssignmentOrder property value. The newAssignmentOrder property
     * @param value Value to set for the newAssignmentOrder property.
     */
    public set newAssignmentOrder(value: AssignmentOrder | undefined) {
        if(value) {
            this._newAssignmentOrder = value instanceof AssignmentOrderImpl? value : new AssignmentOrderImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.newAssignmentOrder){
            writer.writeObjectValue<AssignmentOrderImpl>("newAssignmentOrder", (!this.newAssignmentOrder || this.newAssignmentOrder instanceof AssignmentOrderImpl? this.newAssignmentOrder : new AssignmentOrderImpl(this.newAssignmentOrder)));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
