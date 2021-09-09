import {Entity} from './applicationTemplates/entity';
import {ChatMessage} from './chatMessage';
import {ChatType} from './chats/chatType';
import {ConversationMember} from './conversationMember';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsTab} from './teamsTab';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class Chat extends Entity implements Parsable {
    /** Specifies the type of chat. Possible values are:group, oneOnOne and meeting.  */
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
    private _tabs?: TeamsTab[] | undefined;
    /** (Optional) Subject or topic for the chat. Only available for group chats.  */
    private _topic?: string | undefined;
    /**
     * Instantiates a new chat and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the chatType property value. Specifies the type of chat. Possible values are:group, oneOnOne and meeting.
     * @returns a chatType
     */
    public get chatType() {
        return this._chatType;
    };
    /**
     * Gets the createdDateTime property value. Date and time at which the chat was created. Read-only.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Gets the installedApps property value. A collection of all the apps in the chat. Nullable.
     * @returns a teamsAppInstallation
     */
    public get installedApps() {
        return this._installedApps;
    };
    /**
     * Gets the lastUpdatedDateTime property value. Date and time at which the chat was renamed or list of members were last changed. Read-only.
     * @returns a Date
     */
    public get lastUpdatedDateTime() {
        return this._lastUpdatedDateTime;
    };
    /**
     * Gets the members property value. A collection of all the members in the chat. Nullable.
     * @returns a conversationMember
     */
    public get members() {
        return this._members;
    };
    /**
     * Gets the messages property value. A collection of all the messages in the chat. Nullable.
     * @returns a chatMessage
     */
    public get messages() {
        return this._messages;
    };
    /**
     * Gets the tabs property value. 
     * @returns a teamsTab
     */
    public get tabs() {
        return this._tabs;
    };
    /**
     * Gets the topic property value. (Optional) Subject or topic for the chat. Only available for group chats.
     * @returns a string
     */
    public get topic() {
        return this._topic;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["chatType", (o, n) => { (o as unknown as Chat).chatType = n.getEnumValue<ChatType>(ChatType); }],
            ["createdDateTime", (o, n) => { (o as unknown as Chat).createdDateTime = n.getDateValue(); }],
            ["installedApps", (o, n) => { (o as unknown as Chat).installedApps = n.getCollectionOfObjectValues<TeamsAppInstallation>(TeamsAppInstallation); }],
            ["lastUpdatedDateTime", (o, n) => { (o as unknown as Chat).lastUpdatedDateTime = n.getDateValue(); }],
            ["members", (o, n) => { (o as unknown as Chat).members = n.getCollectionOfObjectValues<ConversationMember>(ConversationMember); }],
            ["messages", (o, n) => { (o as unknown as Chat).messages = n.getCollectionOfObjectValues<ChatMessage>(ChatMessage); }],
            ["tabs", (o, n) => { (o as unknown as Chat).tabs = n.getCollectionOfObjectValues<TeamsTab>(TeamsTab); }],
            ["topic", (o, n) => { (o as unknown as Chat).topic = n.getStringValue(); }],
        ]);
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
        writer.writeCollectionOfObjectValues<TeamsTab>("tabs", this.tabs);
        writer.writeStringValue("topic", this.topic);
    };
    /**
     * Sets the chatType property value. Specifies the type of chat. Possible values are:group, oneOnOne and meeting.
     * @param value Value to set for the chatType property.
     */
    public set chatType(value: ChatType | undefined) {
        this._chatType = value;
    };
    /**
     * Sets the createdDateTime property value. Date and time at which the chat was created. Read-only.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        this._createdDateTime = value;
    };
    /**
     * Sets the installedApps property value. A collection of all the apps in the chat. Nullable.
     * @param value Value to set for the installedApps property.
     */
    public set installedApps(value: TeamsAppInstallation[] | undefined) {
        this._installedApps = value;
    };
    /**
     * Sets the lastUpdatedDateTime property value. Date and time at which the chat was renamed or list of members were last changed. Read-only.
     * @param value Value to set for the lastUpdatedDateTime property.
     */
    public set lastUpdatedDateTime(value: Date | undefined) {
        this._lastUpdatedDateTime = value;
    };
    /**
     * Sets the members property value. A collection of all the members in the chat. Nullable.
     * @param value Value to set for the members property.
     */
    public set members(value: ConversationMember[] | undefined) {
        this._members = value;
    };
    /**
     * Sets the messages property value. A collection of all the messages in the chat. Nullable.
     * @param value Value to set for the messages property.
     */
    public set messages(value: ChatMessage[] | undefined) {
        this._messages = value;
    };
    /**
     * Sets the tabs property value. 
     * @param value Value to set for the tabs property.
     */
    public set tabs(value: TeamsTab[] | undefined) {
        this._tabs = value;
    };
    /**
     * Sets the topic property value. (Optional) Subject or topic for the chat. Only available for group chats.
     * @param value Value to set for the topic property.
     */
    public set topic(value: string | undefined) {
        this._topic = value;
    };
}
