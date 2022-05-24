import {ChatMessageHostedContent} from './chatMessageHostedContent';
import {ChatMessageHostedContentCollectionResponse} from './chatMessageHostedContentCollectionResponse';
import {createChatMessageHostedContentFromDiscriminatorValue} from './createChatMessageHostedContentFromDiscriminatorValue';
import {ChatMessageHostedContentImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageHostedContentCollectionResponseImpl implements AdditionalDataHolder, ChatMessageHostedContentCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ChatMessageHostedContent[] | undefined;
    /**
     * Instantiates a new ChatMessageHostedContentCollectionResponse and sets the default values.
     * @param chatMessageHostedContentCollectionResponseParameterValue 
     */
    public constructor(chatMessageHostedContentCollectionResponseParameterValue?: ChatMessageHostedContentCollectionResponse | undefined) {
        this.additionalData = chatMessageHostedContentCollectionResponseParameterValue?.additionalData ? chatMessageHostedContentCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = chatMessageHostedContentCollectionResponseParameterValue?.nextLink ;
        this.value = chatMessageHostedContentCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ChatMessageHostedContentImpl>(createChatMessageHostedContentFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ChatMessageHostedContentImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ChatMessageHostedContentImpl(element));});
        writer.writeCollectionOfObjectValues<ChatMessageHostedContentImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
