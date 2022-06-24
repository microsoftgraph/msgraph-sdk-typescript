import {Channel} from './channel';
import {ChannelMembershipType} from './channelMembershipType';
import {ChatMessage} from './chatMessage';
import {ConversationMember} from './conversationMember';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createSharedWithChannelTeamInfoFromDiscriminatorValue} from './createSharedWithChannelTeamInfoFromDiscriminatorValue';
import {createTeamsTabFromDiscriminatorValue} from './createTeamsTabFromDiscriminatorValue';
import {DriveItem} from './driveItem';
import {ChatMessageImpl, ConversationMemberImpl, DriveItemImpl, EntityImpl, SharedWithChannelTeamInfoImpl, TeamsTabImpl} from './index';
import {SharedWithChannelTeamInfo} from './sharedWithChannelTeamInfo';
import {TeamsTab} from './teamsTab';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class ChannelImpl extends EntityImpl implements Channel {
    /** Read only. Timestamp at which the channel was created. */
    public createdDateTime?: Date | undefined;
    /** Optional textual description for the channel. */
    public description?: string | undefined;
    /** Channel name as it will appear to the user in Microsoft Teams. */
    public displayName?: string | undefined;
    /** The email address for sending messages to the channel. Read-only. */
    public email?: string | undefined;
    /** Metadata for the location where the channel's files are stored. */
    public filesFolder?: DriveItem | undefined;
    /** Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false. */
    public isFavoriteByDefault?: boolean | undefined;
    /** A collection of membership records associated with the channel. */
    public members?: ConversationMember[] | undefined;
    /** The type of the channel. Can be set during creation and can't be changed. The possible values are: standard, private, unknownFutureValue, shared. The default value is standard. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: shared. */
    public membershipType?: ChannelMembershipType | undefined;
    /** A collection of all the messages in the channel. A navigation property. Nullable. */
    public messages?: ChatMessage[] | undefined;
    /** A collection of teams with which a channel is shared. */
    public sharedWithTeams?: SharedWithChannelTeamInfo[] | undefined;
    /** A collection of all the tabs in the channel. A navigation property. */
    public tabs?: TeamsTab[] | undefined;
    /** The ID of the Azure Active Directory tenant. */
    public tenantId?: string | undefined;
    /** A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new channel and sets the default values.
     * @param channelParameterValue 
     */
    public constructor(channelParameterValue?: Channel | undefined) {
        super(channelParameterValue);
        this.createdDateTime = channelParameterValue?.createdDateTime;
        this.description = channelParameterValue?.description;
        this.displayName = channelParameterValue?.displayName;
        this.email = channelParameterValue?.email;
        this.filesFolder = channelParameterValue?.filesFolder instanceof DriveItemImpl? channelParameterValue?.filesFolder:new DriveItemImpl(channelParameterValue?.filesFolder);
        this.isFavoriteByDefault = channelParameterValue?.isFavoriteByDefault;
        const membersArrValue: ConversationMemberImpl[] = []; channelParameterValue.members?.forEach(element => {membersArrValue.push(element instanceof ConversationMemberImpl? element : new ConversationMemberImpl(element));});
        this.members = membersArrValue;
        this.membershipType = channelParameterValue?.membershipType;
        const messagesArrValue: ChatMessageImpl[] = []; channelParameterValue.messages?.forEach(element => {messagesArrValue.push(element instanceof ChatMessageImpl? element : new ChatMessageImpl(element));});
        this.messages = messagesArrValue;
        const sharedWithTeamsArrValue: SharedWithChannelTeamInfoImpl[] = []; channelParameterValue.sharedWithTeams?.forEach(element => {sharedWithTeamsArrValue.push(element instanceof SharedWithChannelTeamInfoImpl? element : new SharedWithChannelTeamInfoImpl(element));});
        this.sharedWithTeams = sharedWithTeamsArrValue;
        const tabsArrValue: TeamsTabImpl[] = []; channelParameterValue.tabs?.forEach(element => {tabsArrValue.push(element instanceof TeamsTabImpl? element : new TeamsTabImpl(element));});
        this.tabs = tabsArrValue;
        this.tenantId = channelParameterValue?.tenantId;
        this.webUrl = channelParameterValue?.webUrl;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "email": n => { this.email = n.getStringValue(); },
            "filesFolder": n => { this.filesFolder = n.getObjectValue<DriveItemImpl>(createDriveItemFromDiscriminatorValue); },
            "isFavoriteByDefault": n => { this.isFavoriteByDefault = n.getBooleanValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<ConversationMemberImpl>(createConversationMemberFromDiscriminatorValue); },
            "membershipType": n => { this.membershipType = n.getEnumValue<ChannelMembershipType>(ChannelMembershipType); },
            "messages": n => { this.messages = n.getCollectionOfObjectValues<ChatMessageImpl>(createChatMessageFromDiscriminatorValue); },
            "sharedWithTeams": n => { this.sharedWithTeams = n.getCollectionOfObjectValues<SharedWithChannelTeamInfoImpl>(createSharedWithChannelTeamInfoFromDiscriminatorValue); },
            "tabs": n => { this.tabs = n.getCollectionOfObjectValues<TeamsTabImpl>(createTeamsTabFromDiscriminatorValue); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
            writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
            writer.writeStringValue("displayName", this.displayName);
        }
        if(this.email){
            writer.writeStringValue("email", this.email);
        }
        if(this.filesFolder){
            writer.writeObjectValue<DriveItemImpl>("filesFolder", new DriveItemImpl(this.filesFolder));
        }
        if(this.isFavoriteByDefault){
            writer.writeBooleanValue("isFavoriteByDefault", this.isFavoriteByDefault);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: ConversationMemberImpl[] = []; this.members?.forEach(element => {membersArrValue.push(element instanceof ConversationMemberImpl? element : new ConversationMemberImpl(element));});
            writer.writeCollectionOfObjectValues<ConversationMemberImpl>("members", membersArrValue);
        }
        if(this.membershipType){
            writer.writeEnumValue<ChannelMembershipType>("membershipType", this.membershipType);
        }
        if(this.messages && this.messages.length != 0){        const messagesArrValue: ChatMessageImpl[] = []; this.messages?.forEach(element => {messagesArrValue.push(element instanceof ChatMessageImpl? element : new ChatMessageImpl(element));});
            writer.writeCollectionOfObjectValues<ChatMessageImpl>("messages", messagesArrValue);
        }
        if(this.sharedWithTeams && this.sharedWithTeams.length != 0){        const sharedWithTeamsArrValue: SharedWithChannelTeamInfoImpl[] = []; this.sharedWithTeams?.forEach(element => {sharedWithTeamsArrValue.push(element instanceof SharedWithChannelTeamInfoImpl? element : new SharedWithChannelTeamInfoImpl(element));});
            writer.writeCollectionOfObjectValues<SharedWithChannelTeamInfoImpl>("sharedWithTeams", sharedWithTeamsArrValue);
        }
        if(this.tabs && this.tabs.length != 0){        const tabsArrValue: TeamsTabImpl[] = []; this.tabs?.forEach(element => {tabsArrValue.push(element instanceof TeamsTabImpl? element : new TeamsTabImpl(element));});
            writer.writeCollectionOfObjectValues<TeamsTabImpl>("tabs", tabsArrValue);
        }
        if(this.tenantId){
            writer.writeStringValue("tenantId", this.tenantId);
        }
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
    };
}
