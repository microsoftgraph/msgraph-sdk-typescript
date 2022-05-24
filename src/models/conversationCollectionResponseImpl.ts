import {Conversation} from './conversation';
import {ConversationCollectionResponse} from './conversationCollectionResponse';
import {createConversationFromDiscriminatorValue} from './createConversationFromDiscriminatorValue';
import {ConversationImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConversationCollectionResponseImpl implements AdditionalDataHolder, ConversationCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Conversation[] | undefined;
    /**
     * Instantiates a new ConversationCollectionResponse and sets the default values.
     * @param conversationCollectionResponseParameterValue 
     */
    public constructor(conversationCollectionResponseParameterValue?: ConversationCollectionResponse | undefined) {
        this.additionalData = conversationCollectionResponseParameterValue?.additionalData ? conversationCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = conversationCollectionResponseParameterValue?.nextLink ;
        this.value = conversationCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ConversationImpl>(createConversationFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ConversationImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ConversationImpl(element));});
        writer.writeCollectionOfObjectValues<ConversationImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
