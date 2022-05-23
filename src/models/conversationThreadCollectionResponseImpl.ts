import {ConversationThread} from './conversationThread';
import {ConversationThreadCollectionResponse} from './conversationThreadCollectionResponse';
import {createConversationThreadFromDiscriminatorValue} from './createConversationThreadFromDiscriminatorValue';
import {ConversationThreadImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConversationThreadCollectionResponseImpl implements AdditionalDataHolder, ConversationThreadCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: ConversationThread[] | undefined;
    /**
     * Instantiates a new ConversationThreadCollectionResponse and sets the default values.
     * @param conversationThreadCollectionResponseParameterValue 
     */
    public constructor(conversationThreadCollectionResponseParameterValue?: ConversationThreadCollectionResponse | undefined) {
        this.additionalData = conversationThreadCollectionResponseParameterValue?.additionalData ? conversationThreadCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = conversationThreadCollectionResponseParameterValue?.nextLink ;
        this.value = conversationThreadCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ConversationThreadImpl>(createConversationThreadFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ConversationThreadImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ConversationThreadImpl(element));});
        writer.writeCollectionOfObjectValues<ConversationThreadImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
