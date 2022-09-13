import {ChannelMembershipType} from './channelMembershipType';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createDriveItemFromDiscriminatorValue} from './createDriveItemFromDiscriminatorValue';
import {createSharedWithChannelTeamInfoFromDiscriminatorValue} from './createSharedWithChannelTeamInfoFromDiscriminatorValue';
import {createTeamsTabFromDiscriminatorValue} from './createTeamsTabFromDiscriminatorValue';
import {ChatMessage, ConversationMember, DriveItem, Entity, SharedWithChannelTeamInfo, TeamsTab} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of agreementAcceptance entities. */
export class Channel extends Entity implements Parsable {
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
     */
    public constructor() {
        super();
        this.odataType = "#microsoft.graph.channel";
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
        this._createdDateTime = value;
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
        this._description = value;
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
        this._displayName = value;
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
        this._email = value;
    };
    /**
     * Gets the filesFolder property value. Metadata for the location where the channel's files are stored.
     * @returns a driveItem
     */
    public get filesFolder() {
        return this._filesFolder;
    };
    /**
     * Sets the filesFolder property value. Metadata for the location where the channel's files are stored.
     * @param value Value to set for the filesFolder property.
     */
    public set filesFolder(value: DriveItem | undefined) {
        this._filesFolder = value;
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
            "filesFolder": n => { this.filesFolder = n.getObjectValue<DriveItem>(createDriveItemFromDiscriminatorValue); },
            "isFavoriteByDefault": n => { this.isFavoriteByDefault = n.getBooleanValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
            "membershipType": n => { this.membershipType = n.getEnumValue<ChannelMembershipType>(ChannelMembershipType); },
            "messages": n => { this.messages = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); },
            "sharedWithTeams": n => { this.sharedWithTeams = n.getCollectionOfObjectValues<SharedWithChannelTeamInfo>(createSharedWithChannelTeamInfoFromDiscriminatorValue); },
            "tabs": n => { this.tabs = n.getCollectionOfObjectValues<TeamsTab>(createTeamsTabFromDiscriminatorValue); },
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
        this._isFavoriteByDefault = value;
    };
    /**
     * Gets the members property value. A collection of membership records associated with the channel.
     * @returns a conversationMember
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. A collection of membership records associated with the channel.
     * @param value Value to set for the members property.
     */
    public set members(value: ConversationMember[] | undefined) {
        this._members = value;
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
        this._membershipType = value;
    };
    /**
     * Gets the messages property value. A collection of all the messages in the channel. A navigation property. Nullable.
     * @returns a chatMessage
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Sets the messages property value. A collection of all the messages in the channel. A navigation property. Nullable.
     * @param value Value to set for the messages property.
     */
    public set messages(value: ChatMessage[] | undefined) {
        this._messages = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeStringValue("description", this.description);
        writer.writeStringValue("displayName", this.displayName);
        writer.writeStringValue("email", this.email);
        writer.writeObjectValue<DriveItem>("filesFolder", this.filesFolder);
        writer.writeBooleanValue("isFavoriteByDefault", this.isFavoriteByDefault);
        writer.writeCollectionOfObjectValues<ConversationMember>("members", this.members);
        writer.writeEnumValue<ChannelMembershipType>("membershipType", this.membershipType);
        writer.writeCollectionOfObjectValues<ChatMessage>("messages", this.messages);
        writer.writeCollectionOfObjectValues<SharedWithChannelTeamInfo>("sharedWithTeams", this.sharedWithTeams);
        writer.writeCollectionOfObjectValues<TeamsTab>("tabs", this.tabs);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the sharedWithTeams property value. A collection of teams with which a channel is shared.
     * @returns a sharedWithChannelTeamInfo
     */
    public get sharedWithTeams() {
        return this._sharedWithTeams;
    };
    /**
     * Sets the sharedWithTeams property value. A collection of teams with which a channel is shared.
     * @param value Value to set for the sharedWithTeams property.
     */
    public set sharedWithTeams(value: SharedWithChannelTeamInfo[] | undefined) {
        this._sharedWithTeams = value;
    };
    /**
     * Gets the tabs property value. A collection of all the tabs in the channel. A navigation property.
     * @returns a teamsTab
     */
    public get tabs() {
        return this._tabs;
    };
    /**
     * Sets the tabs property value. A collection of all the tabs in the channel. A navigation property.
     * @param value Value to set for the tabs property.
     */
    public set tabs(value: TeamsTab[] | undefined) {
        this._tabs = value;
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
        this._tenantId = value;
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
        this._webUrl = value;
    };
}
