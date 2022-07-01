import {Chat} from './chat';
import {createChatFromDiscriminatorValue} from './createChatFromDiscriminatorValue';
import {ChatImpl, TeamsAppInstallationImpl} from './index';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserScopeTeamsAppInstallationImpl extends TeamsAppInstallationImpl implements UserScopeTeamsAppInstallation {
    /** The chat between the user and Teams app. */
    private _chat?: Chat | undefined;
    /**
     * Gets the chat property value. The chat between the user and Teams app.
     * @returns a ChatInterface
     */
    public get chat() {
        return this._chat;
    };
    /**
     * Sets the chat property value. The chat between the user and Teams app.
     * @param value Value to set for the chat property.
     */
    public set chat(value: Chat | undefined) {
        if(value) {
            this._chat = value instanceof ChatImpl? value as ChatImpl: new ChatImpl(value);
        }
    };
    /**
     * Instantiates a new UserScopeTeamsAppInstallation and sets the default values.
     * @param userScopeTeamsAppInstallationParameterValue 
     */
    public constructor(userScopeTeamsAppInstallationParameterValue?: UserScopeTeamsAppInstallation | undefined) {
        super(userScopeTeamsAppInstallationParameterValue);
        this._chat = userScopeTeamsAppInstallationParameterValue?.chat;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "chat": n => { this.chat = n.getObjectValue<ChatImpl>(createChatFromDiscriminatorValue); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.chat){
            writer.writeObjectValue<ChatImpl>("chat", (this.chat instanceof ChatImpl? this.chat as ChatImpl: new ChatImpl(this.chat)));
        }
    };
}
