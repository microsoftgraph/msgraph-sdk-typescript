import {AssignmentOrderImpl} from '../../../../../models/';
import {AssignmentOrder} from '../../../../../models/assignmentOrder';
import {createAssignmentOrderFromDiscriminatorValue} from '../../../../../models/createAssignmentOrderFromDiscriminatorValue';
import {SetOrderPostRequestBody} from './setOrderPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the setOrder method. */
export class SetOrderPostRequestBodyImpl implements AdditionalDataHolder, Parsable, SetOrderPostRequestBody {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The newAssignmentOrder property */
    public newAssignmentOrder?: AssignmentOrder | undefined;
    /**
     * Instantiates a new setOrderPostRequestBody and sets the default values.
     * @param setOrderPostRequestBodyParameterValue 
     */
    public constructor(setOrderPostRequestBodyParameterValue?: SetOrderPostRequestBody | undefined) {
        this.additionalData = setOrderPostRequestBodyParameterValue?.additionalData ? setOrderPostRequestBodyParameterValue?.additionalData! : {}
        this.newAssignmentOrder = setOrderPostRequestBodyParameterValue?.newAssignmentOrder ;
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
        writer.writeObjectValue<AssignmentOrderImpl>("newAssignmentOrder", new AssignmentOrderImpl(this.newAssignmentOrder));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
