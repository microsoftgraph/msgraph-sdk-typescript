import {ChatType} from './chatType';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createTeamsAppInstallationFromDiscriminatorValue} from './createTeamsAppInstallationFromDiscriminatorValue';
import {createTeamsTabFromDiscriminatorValue} from './createTeamsTabFromDiscriminatorValue';
import {createTeamworkOnlineMeetingInfoFromDiscriminatorValue} from './createTeamworkOnlineMeetingInfoFromDiscriminatorValue';
import {ChatMessage, ConversationMember, Entity, TeamsAppInstallation, TeamsTab, TeamworkOnlineMeetingInfo} from './index';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class Chat extends Entity implements Parsable {
    /** Specifies the type of chat. Possible values are: group, oneOnOne, meeting, unknownFutureValue.  */
    private _chatType?: ChatType | undefined;
    /** Date and time at which the chat was created. Read-only.  */
    private _createdDateTime?: Date | undefined;
    /** A collection of all the apps in the chat. Nullable.  */
    private _installedApps?: TeamsAppInstallation[] | undefined;
    /** Date and time at which the chat was renamed or list of members were last changed. Read-only.  */
    private _lastUpdatedDateTime?: Date | undefined;
    /** A collection of all the members in the chat. Nullable.  */
    private _members?: ConversationMember[] | undefined;
    /** A collection of all the messages in the chat. Nullable.  */
    private _messages?: ChatMessage[] | undefined;
    /** Represents details about an online meeting. If the chat isn't associated with an online meeting, the property is empty. Read-only.  */
    private _onlineMeetingInfo?: TeamworkOnlineMeetingInfo | undefined;
    /** A collection of all the tabs in the chat. Nullable.  */
    private _tabs?: TeamsTab[] | undefined;
    /** The identifier of the tenant in which the chat was created. Read-only.  */
    private _tenantId?: string | undefined;
    /** (Optional) Subject or topic for the chat. Only available for group chats.  */
    private _topic?: string | undefined;
    /** The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only.  */
    private _webUrl?: string | undefined;
    /**
     * Gets the chatType property value. Specifies the type of chat. Possible values are: group, oneOnOne, meeting, unknownFutureValue.
     * @returns a chatType
     */
    public get chatType() {
        return this._chatType;
    };
    /**
     * Sets the chatType property value. Specifies the type of chat. Possible values are: group, oneOnOne, meeting, unknownFutureValue.
     * @param value Value to set for the chatType property.
     */
    public set chatType(value: ChatType | undefined) {
        this._chatType = value;
    };
    /**
     * Instantiates a new chat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the createdDateTime property value. Date and time at which the chat was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Date and time at which the chat was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Record<string, (item: T, node: ParseNode) => void> {
        return {...super.getFieldDeserializers<T>(),
            "chatType": (o, n) => { (o as unknown as Chat).chatType = n.getEnumValue<ChatType>(ChatType); },
            "createdDateTime": (o, n) => { (o as unknown as Chat).createdDateTime = n.getDateValue(); },
            "installedApps": (o, n) => { (o as unknown as Chat).installedApps = n.getCollectionOfObjectValues<TeamsAppInstallation>(createTeamsAppInstallationFromDiscriminatorValue); },
            "lastUpdatedDateTime": (o, n) => { (o as unknown as Chat).lastUpdatedDateTime = n.getDateValue(); },
            "members": (o, n) => { (o as unknown as Chat).members = n.getCollectionOfObjectValues<ConversationMember>(createConversationMemberFromDiscriminatorValue); },
            "messages": (o, n) => { (o as unknown as Chat).messages = n.getCollectionOfObjectValues<ChatMessage>(createChatMessageFromDiscriminatorValue); },
            "onlineMeetingInfo": (o, n) => { (o as unknown as Chat).onlineMeetingInfo = n.getObjectValue<TeamworkOnlineMeetingInfo>(createTeamworkOnlineMeetingInfoFromDiscriminatorValue); },
            "tabs": (o, n) => { (o as unknown as Chat).tabs = n.getCollectionOfObjectValues<TeamsTab>(createTeamsTabFromDiscriminatorValue); },
            "tenantId": (o, n) => { (o as unknown as Chat).tenantId = n.getStringValue(); },
            "topic": (o, n) => { (o as unknown as Chat).topic = n.getStringValue(); },
            "webUrl": (o, n) => { (o as unknown as Chat).webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the installedApps property value. A collection of all the apps in the chat. Nullable.
     * @returns a teamsAppInstallation
     */
    public get installedApps() {
        return this._installedApps;
    };
    /**
     * Sets the installedApps property value. A collection of all the apps in the chat. Nullable.
     * @param value Value to set for the installedApps property.
     */
    public set installedApps(value: TeamsAppInstallation[] | undefined) {
        this._installedApps = value;
    };
    /**
     * Gets the lastUpdatedDateTime property value. Date and time at which the chat was renamed or list of members were last changed. Read-only.
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Sets the lastUpdatedDateTime property value. Date and time at which the chat was renamed or list of members were last changed. Read-only.
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
    };
    /**
     * Gets the members property value. A collection of all the members in the chat. Nullable.
     * @returns a conversationMember
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. A collection of all the members in the chat. Nullable.
     * @param value Value to set for the members property.
     */
    public set members(value: ConversationMember[] | undefined) {
        this._members = value;
    };
    /**
     * Gets the messages property value. A collection of all the messages in the chat. Nullable.
     * @returns a chatMessage
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Sets the messages property value. A collection of all the messages in the chat. Nullable.
     * @param value Value to set for the messages property.
     */
    public set messages(value: ChatMessage[] | undefined) {
        this._messages = value;
    };
    /**
     * Gets the onlineMeetingInfo property value. Represents details about an online meeting. If the chat isn't associated with an online meeting, the property is empty. Read-only.
     * @returns a teamworkOnlineMeetingInfo
     */
    public get onlineMeetingInfo() {
        return this._onlineMeetingInfo;
    };
    /**
     * Sets the onlineMeetingInfo property value. Represents details about an online meeting. If the chat isn't associated with an online meeting, the property is empty. Read-only.
     * @param value Value to set for the onlineMeetingInfo property.
     */
    public set onlineMeetingInfo(value: TeamworkOnlineMeetingInfo | undefined) {
        this._onlineMeetingInfo = value;
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeEnumValue<ChatType>("chatType", this.chatType);
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        writer.writeCollectionOfObjectValues<TeamsAppInstallation>("installedApps", this.installedApps);
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        writer.writeCollectionOfObjectValues<ConversationMember>("members", this.members);
        writer.writeCollectionOfObjectValues<ChatMessage>("messages", this.messages);
        writer.writeObjectValue<TeamworkOnlineMeetingInfo>("onlineMeetingInfo", this.onlineMeetingInfo);
        writer.writeCollectionOfObjectValues<TeamsTab>("tabs", this.tabs);
        writer.writeStringValue("tenantId", this.tenantId);
        writer.writeStringValue("topic", this.topic);
        writer.writeStringValue("webUrl", this.webUrl);
    };
    /**
     * Gets the tabs property value. A collection of all the tabs in the chat. Nullable.
     * @returns a teamsTab
     */
    public get tabs() {
        return this._tabs;
    };
    /**
     * Sets the tabs property value. A collection of all the tabs in the chat. Nullable.
     * @param value Value to set for the tabs property.
     */
    public set tabs(value: TeamsTab[] | undefined) {
        this._tabs = value;
    };
    /**
     * Gets the tenantId property value. The identifier of the tenant in which the chat was created. Read-only.
     * @returns a string
     */
    public get tenantId() {
        return this._tenantId;
    };
    /**
     * Sets the tenantId property value. The identifier of the tenant in which the chat was created. Read-only.
     * @param value Value to set for the tenantId property.
     */
    public set tenantId(value: string | undefined) {
        this._tenantId = value;
    };
    /**
     * Gets the topic property value. (Optional) Subject or topic for the chat. Only available for group chats.
     * @returns a string
     */
    public get topic() {
        return this._topic;
    };
    /**
     * Sets the topic property value. (Optional) Subject or topic for the chat. Only available for group chats.
     * @param value Value to set for the topic property.
     */
    public set topic(value: string | undefined) {
        this._topic = value;
    };
    /**
     * Gets the webUrl property value. The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        this._webUrl = value;
    };
}
