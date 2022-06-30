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
    private _createdDateTime?: Date | undefined;
    /** Optional textual description for the channel. */
    private _description?: string | undefined;
    /** Channel name as it will appear to the user in Microsoft Teams. */
    private _displayName?: string | undefined;
    /** The email address for sending messages to the channel. Read-only. */
    private _email?: string | undefined;
    /** Metadata for the location where the channel's files are stored. */
    private _filesFolder?: DriveItem | undefined;
    /** Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false. */
    private _isFavoriteByDefault?: boolean | undefined;
    /** A collection of membership records associated with the channel. */
    private _members?: ConversationMember[] | undefined;
    /** The type of the channel. Can be set during creation and can't be changed. The possible values are: standard, private, unknownFutureValue, shared. The default value is standard. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: shared. */
    private _membershipType?: ChannelMembershipType | undefined;
    /** A collection of all the messages in the channel. A navigation property. Nullable. */
    private _messages?: ChatMessage[] | undefined;
    /** A collection of teams with which a channel is shared. */
    private _sharedWithTeams?: SharedWithChannelTeamInfo[] | undefined;
    /** A collection of all the tabs in the channel. A navigation property. */
    private _tabs?: TeamsTab[] | undefined;
    /** The ID of the Azure Active Directory tenant. */
    private _tenantId?: string | undefined;
    /** A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only. */
    private _webUrl?: string | undefined;
    /**
     * Instantiates a new channel and sets the default values.
     * @param channelParameterValue 
     */
    public constructor(channelParameterValue?: Channel | undefined) {
        super(channelParameterValue);
        this._createdDateTime = channelParameterValue?.createdDateTime;
        this._description = channelParameterValue?.description;
        this._displayName = channelParameterValue?.displayName;
        this._email = channelParameterValue?.email;
        this._filesFolder = channelParameterValue?.filesFolder;
        this._isFavoriteByDefault = channelParameterValue?.isFavoriteByDefault;
        this._members = channelParameterValue?.members;
        this._membershipType = channelParameterValue?.membershipType;
        this._messages = channelParameterValue?.messages;
        this._sharedWithTeams = channelParameterValue?.sharedWithTeams;
        this._tabs = channelParameterValue?.tabs;
        this._tenantId = channelParameterValue?.tenantId;
        this._webUrl = channelParameterValue?.webUrl;
    };
    /**
     * Gets the createdDateTime property value. Read only. Timestamp at which the channel was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Read only. Timestamp at which the channel was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. Optional textual description for the channel.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. Optional textual description for the channel.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. Channel name as it will appear to the user in Microsoft Teams.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. Channel name as it will appear to the user in Microsoft Teams.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the email property value. The email address for sending messages to the channel. Read-only.
     * @returns a string
     */
    public get email() {
        return this._email;
    };
    /**
     * Sets the email property value. The email address for sending messages to the channel. Read-only.
     * @param value Value to set for the email property.
     */
    public set email(value: string | undefined) {
        if(value) {
            this._email = value;
        }
    };
    /**
     * Gets the filesFolder property value. Metadata for the location where the channel's files are stored.
     * @returns a DriveItemInterface
     */
    public get filesFolder() {
        return this._filesFolder;
    };
    /**
     * Sets the filesFolder property value. Metadata for the location where the channel's files are stored.
     * @param value Value to set for the filesFolder property.
     */
    public set filesFolder(value: DriveItem | undefined) {
        if(value) {
            this._filesFolder = value instanceof DriveItemImpl? value : new DriveItemImpl(value);
        }
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
     * Gets the isFavoriteByDefault property value. Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false.
     * @returns a boolean
     */
    public get isFavoriteByDefault() {
        return this._isFavoriteByDefault;
    };
    /**
     * Sets the isFavoriteByDefault property value. Indicates whether the channel should automatically be marked 'favorite' for all members of the team. Can only be set programmatically with Create team. Default: false.
     * @param value Value to set for the isFavoriteByDefault property.
     */
    public set isFavoriteByDefault(value: boolean | undefined) {
        if(value) {
            this._isFavoriteByDefault = value;
        }
    };
    /**
     * Gets the members property value. A collection of membership records associated with the channel.
     * @returns a ConversationMemberInterface
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. A collection of membership records associated with the channel.
     * @param value Value to set for the members property.
     */
    public set members(value: ConversationMember[] | undefined) {
        if(value) {
            const membersArrValue: ConversationMemberImpl[] = [];
            this.members?.forEach(element => {
                membersArrValue.push((element instanceof ConversationMemberImpl? element:new ConversationMemberImpl(element)));
            });
            this._members = membersArrValue;
        }
    };
    /**
     * Gets the membershipType property value. The type of the channel. Can be set during creation and can't be changed. The possible values are: standard, private, unknownFutureValue, shared. The default value is standard. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: shared.
     * @returns a channelMembershipType
     */
    public get membershipType() {
        return this._membershipType;
    };
    /**
     * Sets the membershipType property value. The type of the channel. Can be set during creation and can't be changed. The possible values are: standard, private, unknownFutureValue, shared. The default value is standard. Note that you must use the Prefer: include-unknown-enum-members request header to get the following value in this evolvable enum: shared.
     * @param value Value to set for the membershipType property.
     */
    public set membershipType(value: ChannelMembershipType | undefined) {
        if(value) {
            this._membershipType = value;
        }
    };
    /**
     * Gets the messages property value. A collection of all the messages in the channel. A navigation property. Nullable.
     * @returns a ChatMessageInterface
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Sets the messages property value. A collection of all the messages in the channel. A navigation property. Nullable.
     * @param value Value to set for the messages property.
     */
    public set messages(value: ChatMessage[] | undefined) {
        if(value) {
            const messagesArrValue: ChatMessageImpl[] = [];
            this.messages?.forEach(element => {
                messagesArrValue.push((element instanceof ChatMessageImpl? element:new ChatMessageImpl(element)));
            });
            this._messages = messagesArrValue;
        }
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
            writer.writeObjectValue<DriveItemImpl>("filesFolder", (!this.filesFolder || this.filesFolder instanceof DriveItemImpl? this.filesFolder : new DriveItemImpl(this.filesFolder)));
        }
        if(this.isFavoriteByDefault){
            writer.writeBooleanValue("isFavoriteByDefault", this.isFavoriteByDefault);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: ConversationMemberImpl[] = [];
        this.members?.forEach(element => {
            membersArrValue.push((element instanceof ConversationMemberImpl? element:new ConversationMemberImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConversationMemberImpl>("members", membersArrValue);
        }
        if(this.membershipType){
            writer.writeEnumValue<ChannelMembershipType>("membershipType", this.membershipType);
        }
        if(this.messages && this.messages.length != 0){        const messagesArrValue: ChatMessageImpl[] = [];
        this.messages?.forEach(element => {
            messagesArrValue.push((element instanceof ChatMessageImpl? element:new ChatMessageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ChatMessageImpl>("messages", messagesArrValue);
        }
        if(this.sharedWithTeams && this.sharedWithTeams.length != 0){        const sharedWithTeamsArrValue: SharedWithChannelTeamInfoImpl[] = [];
        this.sharedWithTeams?.forEach(element => {
            sharedWithTeamsArrValue.push((element instanceof SharedWithChannelTeamInfoImpl? element:new SharedWithChannelTeamInfoImpl(element)));
        });
            writer.writeCollectionOfObjectValues<SharedWithChannelTeamInfoImpl>("sharedWithTeams", sharedWithTeamsArrValue);
        }
        if(this.tabs && this.tabs.length != 0){        const tabsArrValue: TeamsTabImpl[] = [];
        this.tabs?.forEach(element => {
            tabsArrValue.push((element instanceof TeamsTabImpl? element:new TeamsTabImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TeamsTabImpl>("tabs", tabsArrValue);
        }
        if(this.tenantId){
            writer.writeStringValue("tenantId", this.tenantId);
        }
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
    };
    /**
     * Gets the sharedWithTeams property value. A collection of teams with which a channel is shared.
     * @returns a SharedWithChannelTeamInfoInterface
     */
    public get sharedWithTeams() {
        return this._sharedWithTeams;
    };
    /**
     * Sets the sharedWithTeams property value. A collection of teams with which a channel is shared.
     * @param value Value to set for the sharedWithTeams property.
     */
    public set sharedWithTeams(value: SharedWithChannelTeamInfo[] | undefined) {
        if(value) {
            const sharedWithTeamsArrValue: SharedWithChannelTeamInfoImpl[] = [];
            this.sharedWithTeams?.forEach(element => {
                sharedWithTeamsArrValue.push((element instanceof SharedWithChannelTeamInfoImpl? element:new SharedWithChannelTeamInfoImpl(element)));
            });
            this._sharedWithTeams = sharedWithTeamsArrValue;
        }
    };
    /**
     * Gets the tabs property value. A collection of all the tabs in the channel. A navigation property.
     * @returns a TeamsTabInterface
     */
    public get tabs() {
        return this._tabs;
    };
    /**
     * Sets the tabs property value. A collection of all the tabs in the channel. A navigation property.
     * @param value Value to set for the tabs property.
     */
    public set tabs(value: TeamsTab[] | undefined) {
        if(value) {
            const tabsArrValue: TeamsTabImpl[] = [];
            this.tabs?.forEach(element => {
                tabsArrValue.push((element instanceof TeamsTabImpl? element:new TeamsTabImpl(element)));
            });
            this._tabs = tabsArrValue;
        }
    };
    /**
     * Gets the tenantId property value. The ID of the Azure Active Directory tenant.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The ID of the Azure Active Directory tenant.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        if(value) {
            this._tenantId = value;
        }
    };
    /**
     * Gets the webUrl property value. A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. A hyperlink that will go to the channel in Microsoft Teams. This is the URL that you get when you right-click a channel in Microsoft Teams and select Get link to channel. This URL should be treated as an opaque blob, and not parsed. Read-only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        if(value) {
            this._webUrl = value;
        }
    };
}
