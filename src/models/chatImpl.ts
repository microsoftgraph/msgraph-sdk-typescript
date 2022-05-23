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
export class ChatImpl extends EntityImpl implements Chat, Parsable {
    /** Specifies the type of chat. Possible values are: group, oneOnOne, meeting, unknownFutureValue. */
    public chatType?: ChatType | undefined;
    /** Date and time at which the chat was created. Read-only. */
    public createdDateTime?: Date | undefined;
    /** A collection of all the apps in the chat. Nullable. */
    public installedApps?: TeamsAppInstallation[] | undefined;
    /** Date and time at which the chat was renamed or list of members were last changed. Read-only. */
    public lastUpdatedDateTime?: Date | undefined;
    /** A collection of all the members in the chat. Nullable. */
    public members?: ConversationMember[] | undefined;
    /** A collection of all the messages in the chat. Nullable. */
    public messages?: ChatMessage[] | undefined;
    /** Represents details about an online meeting. If the chat isn't associated with an online meeting, the property is empty. Read-only. */
    public onlineMeetingInfo?: TeamworkOnlineMeetingInfo | undefined;
    /** A collection of all the tabs in the chat. Nullable. */
    public tabs?: TeamsTab[] | undefined;
    /** The identifier of the tenant in which the chat was created. Read-only. */
    public tenantId?: string | undefined;
    /** (Optional) Subject or topic for the chat. Only available for group chats. */
    public topic?: string | undefined;
    /** The URL for the chat in Microsoft Teams. The URL should be treated as an opaque blob, and not parsed. Read-only. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new chat and sets the default values.
     * @param chatParameterValue 
     */
    public constructor(chatParameterValue?: Chat | undefined) {
        super();
        this.chatType = chatParameterValue?.chatType ;
        this.createdDateTime = chatParameterValue?.createdDateTime ;
        this.installedApps = chatParameterValue?.installedApps ;
        this.lastUpdatedDateTime = chatParameterValue?.lastUpdatedDateTime ;
        this.members = chatParameterValue?.members ;
        this.messages = chatParameterValue?.messages ;
        this.onlineMeetingInfo = chatParameterValue?.onlineMeetingInfo ;
        this.tabs = chatParameterValue?.tabs ;
        this.tenantId = chatParameterValue?.tenantId ;
        this.topic = chatParameterValue?.topic ;
        this.webUrl = chatParameterValue?.webUrl ;
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
        if(this.installedApps && this.installedApps.length != 0){        const installedAppsArrValue: TeamsAppInstallationImpl[] = []; this.installedApps?.forEach(element => {installedAppsArrValue.push(new TeamsAppInstallationImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsAppInstallationImpl>("installedApps", installedAppsArrValue);
        }
        if(this.lastUpdatedDateTime){
        writer.writeDateValue("lastUpdatedDateTime", this.lastUpdatedDateTime);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: ConversationMemberImpl[] = []; this.members?.forEach(element => {membersArrValue.push(new ConversationMemberImpl(element));});
        writer.writeCollectionOfObjectValues<ConversationMemberImpl>("members", membersArrValue);
        }
        if(this.messages && this.messages.length != 0){        const messagesArrValue: ChatMessageImpl[] = []; this.messages?.forEach(element => {messagesArrValue.push(new ChatMessageImpl(element));});
        writer.writeCollectionOfObjectValues<ChatMessageImpl>("messages", messagesArrValue);
        }
        if(this.onlineMeetingInfo){
        writer.writeObjectValue<TeamworkOnlineMeetingInfoImpl>("onlineMeetingInfo", new TeamworkOnlineMeetingInfoImpl(this.onlineMeetingInfo));
        }
        if(this.tabs && this.tabs.length != 0){        const tabsArrValue: TeamsTabImpl[] = []; this.tabs?.forEach(element => {tabsArrValue.push(new TeamsTabImpl(element));});
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
}
