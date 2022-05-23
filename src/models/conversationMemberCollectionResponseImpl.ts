import {ConversationMember} from './conversationMember';
import {ConversationMemberCollectionResponse} from './conversationMemberCollectionResponse';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {ConversationMemberImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConversationMemberCollectionResponseImpl implements AdditionalDataHolder, ConversationMemberCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ConversationMember[] | undefined;
    /**
     * Instantiates a new ConversationMemberCollectionResponse and sets the default values.
     * @param conversationMemberCollectionResponseParameterValue 
     */
    public constructor(conversationMemberCollectionResponseParameterValue?: ConversationMemberCollectionResponse | undefined) {
        this.additionalData = conversationMemberCollectionResponseParameterValue?.additionalData ? conversationMemberCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = conversationMemberCollectionResponseParameterValue?.nextLink ;
        this.value = conversationMemberCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ConversationMemberImpl>(createConversationMemberFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.nextLink){
        writer.writeStringValue("@odata.nextLink", this.nextLink);
        }
        if(this.value && this.value.length != 0){        const valueArrValue: ConversationMemberImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ConversationMemberImpl(element));});
        writer.writeCollectionOfObjectValues<ConversationMemberImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
