import {Chat} from './chat';
import {createChatFromDiscriminatorValue} from './createChatFromDiscriminatorValue';
import {ChatImpl, TeamsAppInstallationImpl} from './index';
import {UserScopeTeamsAppInstallation} from './userScopeTeamsAppInstallation';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class UserScopeTeamsAppInstallationImpl extends TeamsAppInstallationImpl implements UserScopeTeamsAppInstallation {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** The chat between the user and Teams app. */
    public chat?: Chat | undefined;
    /**
     * Instantiates a new UserScopeTeamsAppInstallation and sets the default values.
     * @param userScopeTeamsAppInstallationParameterValue 
     */
    public constructor(userScopeTeamsAppInstallationParameterValue?: UserScopeTeamsAppInstallation | undefined) {
        super(userScopeTeamsAppInstallationParameterValue);
        this.additionalData = userScopeTeamsAppInstallationParameterValue?.additionalData ? userScopeTeamsAppInstallationParameterValue?.additionalData! : {};
        this.chat = userScopeTeamsAppInstallationParameterValue?.chat instanceof ChatImpl? userScopeTeamsAppInstallationParameterValue?.chat:new ChatImpl(userScopeTeamsAppInstallationParameterValue?.chat);
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
            writer.writeObjectValue<ChatImpl>("chat", new ChatImpl(this.chat));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
