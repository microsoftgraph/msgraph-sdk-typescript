import {ChatRenamedEventMessageDetail} from './chatRenamedEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl} from './index';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ChatRenamedEventMessageDetailImpl extends EventMessageDetailImpl implements ChatRenamedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The updated name of the chat. */
    public chatDisplayName?: string | undefined;
    /** Unique identifier of the chat. */
    public chatId?: string | undefined;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /**
     * Instantiates a new ChatRenamedEventMessageDetail and sets the default values.
     * @param chatRenamedEventMessageDetailParameterValue 
     */
    public constructor(chatRenamedEventMessageDetailParameterValue?: ChatRenamedEventMessageDetail | undefined) {
        super(chatRenamedEventMessageDetailParameterValue);
        this.additionalData = chatRenamedEventMessageDetailParameterValue?.additionalData ? chatRenamedEventMessageDetailParameterValue?.additionalData! : {};
        this.chatDisplayName = chatRenamedEventMessageDetailParameterValue?.chatDisplayName;
        this.chatId = chatRenamedEventMessageDetailParameterValue?.chatId;
        this.initiator = chatRenamedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? chatRenamedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(chatRenamedEventMessageDetailParameterValue?.initiator);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "chatDisplayName": n => { this.chatDisplayName = n.getStringValue(); },
            "chatId": n => { this.chatId = n.getStringValue(); },
            "initiator": n => { this.initiator = n.getObjectValue<IdentitySetImpl>(createIdentitySetFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.chatDisplayName){
            writer.writeStringValue("chatDisplayName", this.chatDisplayName);
        }
        if(this.chatId){
            writer.writeStringValue("chatId", this.chatId);
        }
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
