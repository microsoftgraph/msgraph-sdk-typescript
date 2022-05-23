import {ConversationMemberImpl} from '../../../../../../models/';
import {ConversationMember} from '../../../../../../models/conversationMember';
import {createConversationMemberFromDiscriminatorValue} from '../../../../../../models/createConversationMemberFromDiscriminatorValue';
import {AddPostRequestBody} from './addPostRequestBody';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to call the add method. */
export class AddPostRequestBodyImpl implements AdditionalDataHolder, AddPostRequestBody, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The values property */
    public values?: ConversationMember[] | undefined;
    /**
     * Instantiates a new addPostRequestBody and sets the default values.
     * @param addPostRequestBodyParameterValue 
     */
    public constructor(addPostRequestBodyParameterValue?: AddPostRequestBody | undefined) {
        this.additionalData = addPostRequestBodyParameterValue?.additionalData ? addPostRequestBodyParameterValue?.additionalData! : {}
        this.values = addPostRequestBodyParameterValue?.values ;
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
        if(this.values && this.values.length != 0){        const valuesArrValue: ConversationMemberImpl[] = []; this.values?.forEach(element => {valuesArrValue.push(new ConversationMemberImpl(element));});
        writer.writeCollectionOfObjectValues<ConversationMemberImpl>("values", valuesArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
