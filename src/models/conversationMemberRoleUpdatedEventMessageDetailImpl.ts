import {ConversationMemberRoleUpdatedEventMessageDetail} from './conversationMemberRoleUpdatedEventMessageDetail';
import {createIdentitySetFromDiscriminatorValue} from './createIdentitySetFromDiscriminatorValue';
import {createTeamworkUserIdentityFromDiscriminatorValue} from './createTeamworkUserIdentityFromDiscriminatorValue';
import {IdentitySet} from './identitySet';
import {EventMessageDetailImpl, IdentitySetImpl, TeamworkUserIdentityImpl} from './index';
import {TeamworkUserIdentity} from './teamworkUserIdentity';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class ConversationMemberRoleUpdatedEventMessageDetailImpl extends EventMessageDetailImpl implements ConversationMemberRoleUpdatedEventMessageDetail {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Roles for the coversation member user. */
    public conversationMemberRoles?: string[] | undefined;
    /** Identity of the conversation member user. */
    public conversationMemberUser?: TeamworkUserIdentity | undefined;
    /** Initiator of the event. */
    public initiator?: IdentitySet | undefined;
    /**
     * Instantiates a new ConversationMemberRoleUpdatedEventMessageDetail and sets the default values.
     * @param conversationMemberRoleUpdatedEventMessageDetailParameterValue 
     */
    public constructor(conversationMemberRoleUpdatedEventMessageDetailParameterValue?: ConversationMemberRoleUpdatedEventMessageDetail | undefined) {
        super(conversationMemberRoleUpdatedEventMessageDetailParameterValue);
        this.additionalData = conversationMemberRoleUpdatedEventMessageDetailParameterValue?.additionalData ? conversationMemberRoleUpdatedEventMessageDetailParameterValue?.additionalData! : {};
        this.conversationMemberRoles = conversationMemberRoleUpdatedEventMessageDetailParameterValue?.conversationMemberRoles;
        this.conversationMemberUser = conversationMemberRoleUpdatedEventMessageDetailParameterValue?.conversationMemberUser instanceof TeamworkUserIdentityImpl? conversationMemberRoleUpdatedEventMessageDetailParameterValue?.conversationMemberUser:new TeamworkUserIdentityImpl(conversationMemberRoleUpdatedEventMessageDetailParameterValue?.conversationMemberUser);
        this.initiator = conversationMemberRoleUpdatedEventMessageDetailParameterValue?.initiator instanceof IdentitySetImpl? conversationMemberRoleUpdatedEventMessageDetailParameterValue?.initiator:new IdentitySetImpl(conversationMemberRoleUpdatedEventMessageDetailParameterValue?.initiator);
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "conversationMemberRoles": n => { this.conversationMemberRoles = n.getCollectionOfPrimitiveValues<string>(); },
            "conversationMemberUser": n => { this.conversationMemberUser = n.getObjectValue<TeamworkUserIdentityImpl>(createTeamworkUserIdentityFromDiscriminatorValue); },
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
        if(this.conversationMemberRoles){
            writer.writeCollectionOfPrimitiveValues<string>("conversationMemberRoles", this.conversationMemberRoles);
        }
        if(this.conversationMemberUser){
            writer.writeObjectValue<TeamworkUserIdentityImpl>("conversationMemberUser", new TeamworkUserIdentityImpl(this.conversationMemberUser));
        }
        if(this.initiator){
            writer.writeObjectValue<IdentitySetImpl>("initiator", new IdentitySetImpl(this.initiator));
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
