import {Channel} from './channel';
import {ConversationMember} from './conversationMember';
import {createChannelFromDiscriminatorValue} from './createChannelFromDiscriminatorValue';
import {createConversationMemberFromDiscriminatorValue} from './createConversationMemberFromDiscriminatorValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createScheduleFromDiscriminatorValue} from './createScheduleFromDiscriminatorValue';
import {createTeamFunSettingsFromDiscriminatorValue} from './createTeamFunSettingsFromDiscriminatorValue';
import {createTeamGuestSettingsFromDiscriminatorValue} from './createTeamGuestSettingsFromDiscriminatorValue';
import {createTeamMemberSettingsFromDiscriminatorValue} from './createTeamMemberSettingsFromDiscriminatorValue';
import {createTeamMessagingSettingsFromDiscriminatorValue} from './createTeamMessagingSettingsFromDiscriminatorValue';
import {createTeamsAppInstallationFromDiscriminatorValue} from './createTeamsAppInstallationFromDiscriminatorValue';
import {createTeamsAsyncOperationFromDiscriminatorValue} from './createTeamsAsyncOperationFromDiscriminatorValue';
import {createTeamsTemplateFromDiscriminatorValue} from './createTeamsTemplateFromDiscriminatorValue';
import {Group} from './group';
import {ChannelImpl, ConversationMemberImpl, EntityImpl, GroupImpl, ScheduleImpl, TeamFunSettingsImpl, TeamGuestSettingsImpl, TeamMemberSettingsImpl, TeamMessagingSettingsImpl, TeamsAppInstallationImpl, TeamsAsyncOperationImpl, TeamsTemplateImpl} from './index';
import {Schedule} from './schedule';
import {Team} from './team';
import {TeamFunSettings} from './teamFunSettings';
import {TeamGuestSettings} from './teamGuestSettings';
import {TeamMemberSettings} from './teamMemberSettings';
import {TeamMessagingSettings} from './teamMessagingSettings';
import {TeamsAppInstallation} from './teamsAppInstallation';
import {TeamsAsyncOperation} from './teamsAsyncOperation';
import {TeamSpecialization} from './teamSpecialization';
import {TeamsTemplate} from './teamsTemplate';
import {TeamVisibilityType} from './teamVisibilityType';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Casts the previous resource to group. */
export class TeamImpl extends EntityImpl implements Parsable, Team {
    /** The collection of channels and messages associated with the team. */
    public channels?: Channel[] | undefined;
    /** An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory. */
    public classification?: string | undefined;
    /** Timestamp at which the team was created. */
    public createdDateTime?: Date | undefined;
    /** An optional description for the team. Maximum length: 1024 characters. */
    public description?: string | undefined;
    /** The name of the team. */
    public displayName?: string | undefined;
    /** Settings to configure use of Giphy, memes, and stickers in the team. */
    public funSettings?: TeamFunSettings | undefined;
    /** The group property */
    public group?: Group | undefined;
    /** Settings to configure whether guests can create, update, or delete channels in the team. */
    public guestSettings?: TeamGuestSettings | undefined;
    /** The apps installed in this team. */
    public installedApps?: TeamsAppInstallation[] | undefined;
    /** A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API. */
    public internalId?: string | undefined;
    /** Whether this team is in read-only mode. */
    public isArchived?: boolean | undefined;
    /** Members and owners of the team. */
    public members?: ConversationMember[] | undefined;
    /** Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the team. */
    public memberSettings?: TeamMemberSettings | undefined;
    /** Settings to configure messaging and mentions in the team. */
    public messagingSettings?: TeamMessagingSettings | undefined;
    /** The async operations that ran or are running on this team. */
    public operations?: TeamsAsyncOperation[] | undefined;
    /** The general channel for the team. */
    public primaryChannel?: Channel | undefined;
    /** The schedule of shifts for this team. */
    public schedule?: Schedule | undefined;
    /** Optional. Indicates whether the team is intended for a particular use case.  Each team specialization has access to unique behaviors and experiences targeted to its use case. */
    public specialization?: TeamSpecialization | undefined;
    /** The template this team was created from. See available templates. */
    public template?: TeamsTemplate | undefined;
    /** The visibility of the group and team. Defaults to Public. */
    public visibility?: TeamVisibilityType | undefined;
    /** A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed. */
    public webUrl?: string | undefined;
    /**
     * Instantiates a new team and sets the default values.
     * @param teamParameterValue 
     */
    public constructor(teamParameterValue?: Team | undefined) {
        super();
        this.channels = teamParameterValue?.channels ;
        this.classification = teamParameterValue?.classification ;
        this.createdDateTime = teamParameterValue?.createdDateTime ;
        this.description = teamParameterValue?.description ;
        this.displayName = teamParameterValue?.displayName ;
        this.funSettings = teamParameterValue?.funSettings ;
        this.group = teamParameterValue?.group ;
        this.guestSettings = teamParameterValue?.guestSettings ;
        this.installedApps = teamParameterValue?.installedApps ;
        this.internalId = teamParameterValue?.internalId ;
        this.isArchived = teamParameterValue?.isArchived ;
        this.members = teamParameterValue?.members ;
        this.memberSettings = teamParameterValue?.memberSettings ;
        this.messagingSettings = teamParameterValue?.messagingSettings ;
        this.operations = teamParameterValue?.operations ;
        this.primaryChannel = teamParameterValue?.primaryChannel ;
        this.schedule = teamParameterValue?.schedule ;
        this.specialization = teamParameterValue?.specialization ;
        this.template = teamParameterValue?.template ;
        this.visibility = teamParameterValue?.visibility ;
        this.webUrl = teamParameterValue?.webUrl ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "channels": n => { this.channels = n.getCollectionOfObjectValues<ChannelImpl>(createChannelFromDiscriminatorValue); },
            "classification": n => { this.classification = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "funSettings": n => { this.funSettings = n.getObjectValue<TeamFunSettingsImpl>(createTeamFunSettingsFromDiscriminatorValue); },
            "group": n => { this.group = n.getObjectValue<GroupImpl>(createGroupFromDiscriminatorValue); },
            "guestSettings": n => { this.guestSettings = n.getObjectValue<TeamGuestSettingsImpl>(createTeamGuestSettingsFromDiscriminatorValue); },
            "installedApps": n => { this.installedApps = n.getCollectionOfObjectValues<TeamsAppInstallationImpl>(createTeamsAppInstallationFromDiscriminatorValue); },
            "internalId": n => { this.internalId = n.getStringValue(); },
            "isArchived": n => { this.isArchived = n.getBooleanValue(); },
            "members": n => { this.members = n.getCollectionOfObjectValues<ConversationMemberImpl>(createConversationMemberFromDiscriminatorValue); },
            "memberSettings": n => { this.memberSettings = n.getObjectValue<TeamMemberSettingsImpl>(createTeamMemberSettingsFromDiscriminatorValue); },
            "messagingSettings": n => { this.messagingSettings = n.getObjectValue<TeamMessagingSettingsImpl>(createTeamMessagingSettingsFromDiscriminatorValue); },
            "operations": n => { this.operations = n.getCollectionOfObjectValues<TeamsAsyncOperationImpl>(createTeamsAsyncOperationFromDiscriminatorValue); },
            "primaryChannel": n => { this.primaryChannel = n.getObjectValue<ChannelImpl>(createChannelFromDiscriminatorValue); },
            "schedule": n => { this.schedule = n.getObjectValue<ScheduleImpl>(createScheduleFromDiscriminatorValue); },
            "specialization": n => { this.specialization = n.getEnumValue<TeamSpecialization>(TeamSpecialization); },
            "template": n => { this.template = n.getObjectValue<TeamsTemplateImpl>(createTeamsTemplateFromDiscriminatorValue); },
            "visibility": n => { this.visibility = n.getEnumValue<TeamVisibilityType>(TeamVisibilityType); },
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
        if(this.channels && this.channels.length != 0){        const channelsArrValue: ChannelImpl[] = []; this.channels?.forEach(element => {channelsArrValue.push(new ChannelImpl(element));});
        writer.writeCollectionOfObjectValues<ChannelImpl>("channels", channelsArrValue);
        }
        if(this.classification){
        writer.writeStringValue("classification", this.classification);
        }
        if(this.createdDateTime){
        writer.writeDateValue("createdDateTime", this.createdDateTime);
        }
        if(this.description){
        writer.writeStringValue("description", this.description);
        }
        if(this.displayName){
        writer.writeStringValue("displayName", this.displayName);
        }
        if(this.funSettings){
        writer.writeObjectValue<TeamFunSettingsImpl>("funSettings", new TeamFunSettingsImpl(this.funSettings));
        }
        if(this.group){
        writer.writeObjectValue<GroupImpl>("group", new GroupImpl(this.group));
        }
        if(this.guestSettings){
        writer.writeObjectValue<TeamGuestSettingsImpl>("guestSettings", new TeamGuestSettingsImpl(this.guestSettings));
        }
        if(this.installedApps && this.installedApps.length != 0){        const installedAppsArrValue: TeamsAppInstallationImpl[] = []; this.installedApps?.forEach(element => {installedAppsArrValue.push(new TeamsAppInstallationImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsAppInstallationImpl>("installedApps", installedAppsArrValue);
        }
        if(this.internalId){
        writer.writeStringValue("internalId", this.internalId);
        }
        if(this.isArchived){
        writer.writeBooleanValue("isArchived", this.isArchived);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: ConversationMemberImpl[] = []; this.members?.forEach(element => {membersArrValue.push(new ConversationMemberImpl(element));});
        writer.writeCollectionOfObjectValues<ConversationMemberImpl>("members", membersArrValue);
        }
        if(this.memberSettings){
        writer.writeObjectValue<TeamMemberSettingsImpl>("memberSettings", new TeamMemberSettingsImpl(this.memberSettings));
        }
        if(this.messagingSettings){
        writer.writeObjectValue<TeamMessagingSettingsImpl>("messagingSettings", new TeamMessagingSettingsImpl(this.messagingSettings));
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: TeamsAsyncOperationImpl[] = []; this.operations?.forEach(element => {operationsArrValue.push(new TeamsAsyncOperationImpl(element));});
        writer.writeCollectionOfObjectValues<TeamsAsyncOperationImpl>("operations", operationsArrValue);
        }
        if(this.primaryChannel){
        writer.writeObjectValue<ChannelImpl>("primaryChannel", new ChannelImpl(this.primaryChannel));
        }
        if(this.schedule){
        writer.writeObjectValue<ScheduleImpl>("schedule", new ScheduleImpl(this.schedule));
        }
        if(this.specialization){
        writer.writeEnumValue<TeamSpecialization>("specialization", this.specialization);
        }
        if(this.template){
        writer.writeObjectValue<TeamsTemplateImpl>("template", new TeamsTemplateImpl(this.template));
        }
        if(this.visibility){
        writer.writeEnumValue<TeamVisibilityType>("visibility", this.visibility);
        }
        if(this.webUrl){
        writer.writeStringValue("webUrl", this.webUrl);
        }
    };
}
