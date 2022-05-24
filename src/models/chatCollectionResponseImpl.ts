import {Chat} from './chat';
import {ChatCollectionResponse} from './chatCollectionResponse';
import {createChatFromDiscriminatorValue} from './createChatFromDiscriminatorValue';
import {ChatImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatCollectionResponseImpl implements AdditionalDataHolder, ChatCollectionResponse, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The nextLink property */
    public nextLink?: string | undefined;
    /** The value property */
    public value?: Chat[] | undefined;
    /**
     * Instantiates a new ChatCollectionResponse and sets the default values.
     * @param chatCollectionResponseParameterValue 
     */
    public constructor(chatCollectionResponseParameterValue?: ChatCollectionResponse | undefined) {
        this.additionalData = chatCollectionResponseParameterValue?.additionalData ? chatCollectionResponseParameterValue?.additionalData! : {}
        this.nextLink = chatCollectionResponseParameterValue?.nextLink ;
        this.value = chatCollectionResponseParameterValue?.value ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "@odata.nextLink": n => { this.nextLink = n.getStringValue(); },
            "value": n => { this.value = n.getCollectionOfObjectValues<ChatImpl>(createChatFromDiscriminatorValue); },
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
        if(this.value && this.value.length != 0){        const valueArrValue: ChatImpl[] = []; this.value?.forEach(element => {valueArrValue.push(new ChatImpl(element));});
        writer.writeCollectionOfObjectValues<ChatImpl>("value", valueArrValue);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
