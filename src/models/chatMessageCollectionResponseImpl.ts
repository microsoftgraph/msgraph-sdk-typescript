import {ChatMessage} from './chatMessage';
import {ChatMessageCollectionResponse} from './chatMessageCollectionResponse';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {ChatMessageImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatMessageCollectionResponseImpl implements AdditionalDataHolder, ChatMessageCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ChatMessage[] | undefined;
    /**
     * Instantiates a new ChatMessageCollectionResponse and sets the default values.
     * @param chatMessageCollectionResponseParameterValue 
     */
    public constructor(chatMessageCollectionResponseParameterValue?: ChatMessageCollectionResponse | undefined) {
        this.additionalData = chatMessageCollectionResponseParameterValue?.additionalData ? chatMessageCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = chatMessageCollectionResponseParameterValue?.nextLink ;
        this.value = chatMessageCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ChatMessageImpl>(createChatMessageFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ChatMessageImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ChatMessageImpl(element));});
        writer.writeCollectionOfObjectValues<ChatMessageImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
