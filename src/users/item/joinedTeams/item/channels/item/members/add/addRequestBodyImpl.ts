import {ConversationMemberImpl} from '../../../../../../../../models/';
import {ConversationMember} from '../../../../../../../../models/conversationMember';
import {createConversationMemberFromDiscriminatorValue} from '../../../../../../../../models/createConversationMemberFromDiscriminatorValue';
import {AddRequestBody} from './addRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the add method.  */
export class AddRequestBodyImpl implements AdditionalDataHolder, AddRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.  */
    additionalData: Record<string, unknown>;
    /** The values property  */
    values?: ConversationMember[] | undefined;
    /**
     * Instantiates a new addRequestBody and sets the default values.
     * @param addRequestBodyParameterValue 
     */
    public constructor(addRequestBodyParameterValue?: AddRequestBody | undefined) {
        this.additionalData = {};
        this.additionalData = addRequestBodyParameterValue?.additionalData ? {} : addRequestBodyParameterValue?.additionalData!
        this.values = addRequestBodyParameterValue?.values ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "values": n => { this.values = n.getCollectionOfObjectValues<ConversationMemberImpl>(createConversationMemberFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.values){
        const valuesArrValue: ConversationMemberImpl[] = []; this.values?.forEach(element => {valuesArrValue.push(new ConversationMemberImpl(element));});
        writer.writeCollectionOfObjectValues<ConversationMemberImpl>("values", valuesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
