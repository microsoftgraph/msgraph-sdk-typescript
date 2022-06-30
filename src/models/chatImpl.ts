import {Chat} from './chat';
import {ChatMessage} from './chatMessage';
import {ChatType} from './chatType';
import {ConversationMember} from './conversationMember';
import {createChatMessageFromDiscriminatorValue} from './createChatMessageFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createTeamsAppInstallationFromDiscriminatorValue} from './createTeamsAppInstallationFromDiscriminatorValue';
import {createTeamsTabFromDiscriminatorValue} from './createTeamsTabFromDiscriminatorValue';
import {createTeamworkOnlineMeetingInfoFromDiscriminatorValue} from './createTeamworkOnlineMeetingInfoFromDiscriminatorValue';
import {ChatMessageImpl, ConversationMemberImpl, EntityImpl, TeamsAppInstallationImpl, TeamsTabImpl, TeamworkOnlineMeetingInfoImpl} from './index';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsTab} from './teamsTab';
import {TeamworkOnlineMeetingInfo} from './teamworkOnlineMeetingInfo';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the collection of chat entities. */
export class ChatImpl extends EntityImpl implements Chat {
    /** Specifies the type of chat. Possible values are: group, oneOnOne, meeting, unknownFutureValue. */
    private _chatType?: ChatType | undefined;
    /** Date and time at which the chat was created. Read-only. */
    private _createdDateTime?: Date | undefined;
    /** A collection of all the apps in the chat. Nullable. */
    private _installedApps?: TeamsAppInstallation[] | undefined;
    /** Date and time at which the chat was renamed or list of members were last changed. Read-only. */
    private _lastUpdatedDateTime?: Date | undefined;
    /** A collection of all the members in the chat. Nullable. */
    private _members?: ConversationMember[] | undefined;
    /** A collection of all the messages in the chat. Nullable. */
    private _messages?: ChatMessage[] | undefined;
    /** Represents details about an online meeting. If the chat isn't associated with an online meeting, the property is empty. Read-only. */
    private _onlineMeetingInfo?: TeamworkOnlineMeetingInfo | undefined;
    /** A collection of all the tabs in the chat. Nullable. */
    private _tabs?: TeamsTab[] | undefined;
    /** The identifier of the tenant in which the chat was created. Read-only. */
    private _tenantId?: string | undefined;
    /** (Optional) Subject or topic for the chat. Only available for group chats. */
    private _topic?: string | undefined;
    /** The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only. */
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
        if(value) {
            this._chatType = value;
        }
    };
    /**
     * Instantiates a new chat and sets the default values.
     * @param chatParameterValue 
     */
    public constructor(chatParameterValue?: Chat | undefined) {
        super(chatParameterValue);
        this._chatType = chatParameterValue?.chatType;
        this._createdDateTime = chatParameterValue?.createdDateTime;
        this._installedApps = chatParameterValue?.installedApps;
        this._lastUpdatedDateTime = chatParameterValue?.lastUpdatedDateTime;
        this._members = chatParameterValue?.members;
        this._messages = chatParameterValue?.messages;
        this._onlineMeetingInfo = chatParameterValue?.onlineMeetingInfo;
        this._tabs = chatParameterValue?.tabs;
        this._tenantId = chatParameterValue?.tenantId;
        this._topic = chatParameterValue?.topic;
        this._webUrl = chatParameterValue?.webUrl;
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
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "chatType": n => { this.chatType = n.getEnumValue<ChatType>(ChatType); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "installedApps": n => { this.installedApps = n.getCollectionOfObjectValues<TeamsAppInstallationImpl>(createTeamsAppInstallationFromDiscriminatorValue); },
            "lastUpdatedDateTime": n => { this.lastUpdatedDateTime = n.getDateValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<ConversationMemberImpl>(createConversationMemberFromDiscriminatorValue); },
            "messages": n => { this.messages = n.getCollectionOfObjectValues<ChatMessageImpl>(createChatMessageFromDiscriminatorValue); },
            "onlineMeetingInfo": n => { this.onlineMeetingInfo = n.getObjectValue<TeamworkOnlineMeetingInfoImpl>(createTeamworkOnlineMeetingInfoFromDiscriminatorValue); },
            "tabs": n => { this.tabs = n.getCollectionOfObjectValues<TeamsTabImpl>(createTeamsTabFromDiscriminatorValue); },
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "topic": n => { this.topic = n.getStringValue(); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the installedApps property value. A collection of all the apps in the chat. Nullable.
     * @returns a TeamsAppInstallationInterface
     */
    public get installedApps() {
        return this._installedApps;
    };
    /**
     * Sets the installedApps property value. A collection of all the apps in the chat. Nullable.
     * @param value Value to set for the installedApps property.
     */
    public set installedApps(value: TeamsAppInstallation[] | undefined) {
        if(value) {
            const installedAppsArrValue: TeamsAppInstallationImpl[] = [];
            this.installedApps?.forEach(element => {
                installedAppsArrValue.push((element instanceof TeamsAppInstallationImpl? element:new TeamsAppInstallationImpl(element)));
            });
            this._installedApps = installedAppsArrValue;
        }
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
        if(value) {
            this._lastUpdatedDateTime = value;
        }
    };
    /**
     * Gets the members property value. A collection of all the members in the chat. Nullable.
     * @returns a ConversationMemberInterface
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. A collection of all the members in the chat. Nullable.
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
     * Gets the messages property value. A collection of all the messages in the chat. Nullable.
     * @returns a ChatMessageInterface
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Sets the messages property value. A collection of all the messages in the chat. Nullable.
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
     * Gets the onlineMeetingInfo property value. Represents details about an online meeting. If the chat isn't associated with an online meeting, the property is empty. Read-only.
     * @returns a TeamworkOnlineMeetingInfoInterface
     */
    public get onlineMeetingInfo() {
        return this._onlineMeetingInfo;
    };
    /**
     * Sets the onlineMeetingInfo property value. Represents details about an online meeting. If the chat isn't associated with an online meeting, the property is empty. Read-only.
     * @param value Value to set for the onlineMeetingInfo property.
     */
    public set onlineMeetingInfo(value: TeamworkOnlineMeetingInfo | undefined) {
        if(value) {
            this._onlineMeetingInfo = value instanceof TeamworkOnlineMeetingInfoImpl? value : new TeamworkOnlineMeetingInfoImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.chatType){
            writer.writeEnumValue<ChatType>("chatType", this.chatType);
        }
        if(this.createdDateTime){
            writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.installedApps && this.installedApps.length != 0){        const installedAppsArrValue: TeamsAppInstallationImpl[] = [];
        this.installedApps?.forEach(element => {
            installedAppsArrValue.push((element instanceof TeamsAppInstallationImpl? element:new TeamsAppInstallationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TeamsAppInstallationImpl>("installedApps", installedAppsArrValue);
        }
        if(this.lastUpdatedDateTime){
            writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: ConversationMemberImpl[] = [];
        this.members?.forEach(element => {
            membersArrValue.push((element instanceof ConversationMemberImpl? element:new ConversationMemberImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConversationMemberImpl>("members", membersArrValue);
        }
        if(this.messages && this.messages.length != 0){        const messagesArrValue: ChatMessageImpl[] = [];
        this.messages?.forEach(element => {
            messagesArrValue.push((element instanceof ChatMessageImpl? element:new ChatMessageImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ChatMessageImpl>("messages", messagesArrValue);
        }
        if(this.onlineMeetingInfo){
            writer.writeObjectValue<TeamworkOnlineMeetingInfoImpl>("onlineMeetingInfo", (!this.onlineMeetingInfo || this.onlineMeetingInfo instanceof TeamworkOnlineMeetingInfoImpl? this.onlineMeetingInfo : new TeamworkOnlineMeetingInfoImpl(this.onlineMeetingInfo)));
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
        if(this.topic){
            writer.writeStringValue("topic", this.topic);
        }
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
    };
    /**
     * Gets the tabs property value. A collection of all the tabs in the chat. Nullable.
     * @returns a TeamsTabInterface
     */
    public get tabs() {
        return this._tabs;
    };
    /**
     * Sets the tabs property value. A collection of all the tabs in the chat. Nullable.
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
        if(value) {
            this._tenantId = value;
        }
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
        if(value) {
            this._topic = value;
        }
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
        if(value) {
            this._webUrl = value;
        }
    };
}
