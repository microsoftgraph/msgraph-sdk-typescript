import {AssignmentOrderImpl} from '../../../../../models/';
import {AssignmentOrder} from '../../../../../models/assignmentOrder';
import {createAssignmentOrderFromDiscriminatorValue} from '../../../../../models/createAssignmentOrderFromDiscriminatorValue';
import {SetOrderRequestBody} from './setOrderRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setOrder method. */
export class SetOrderRequestBodyImpl implements AdditionalDataHolder, Parsable, SetOrderRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData: Record<string, unknown>;
    /** The newAssignmentOrder property */
    newAssignmentOrder?: AssignmentOrder | undefined;
    /**
     * Instantiates a new setOrderRequestBody and sets the default values.
     * @param setOrderRequestBodyParameterValue 
     */
    public constructor(setOrderRequestBodyParameterValue?: SetOrderRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = setOrderRequestBodyParameterValue?.additionalData ? {} : setOrderRequestBodyParameterValue?.additionalData!
        this.newAssignmentOrder = setOrderRequestBodyParameterValue?.newAssignmentOrder ;
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
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.newAssignmentOrder){
        if(this.newAssignmentOrder)
        writer.writeObjectValue<AssignmentOrderImpl>("newAssignmentOrder", new AssignmentOrderImpl(this.newAssignmentOrder));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
