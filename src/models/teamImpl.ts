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
export class TeamImpl extends EntityImpl implements Team {
    /** List of channels either hosted in or shared with the team (incoming channels). */
    private _allChannels?: Channel[] | undefined;
    /** The collection of channels and messages associated with the team. */
    private _channels?: Channel[] | undefined;
    /** An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory. */
    private _classification?: string | undefined;
    /** Timestamp at which the team was created. */
    private _createdDateTime?: Date | undefined;
    /** An optional description for the team. Maximum length: 1024 characters. */
    private _description?: string | undefined;
    /** The name of the team. */
    private _displayName?: string | undefined;
    /** Settings to configure use of Giphy, memes, and stickers in the team. */
    private _funSettings?: TeamFunSettings | undefined;
    /** The group property */
    private _group?: Group | undefined;
    /** Settings to configure whether guests can create, update, or delete channels in the team. */
    private _guestSettings?: TeamGuestSettings | undefined;
    /** List of channels shared with the team. */
    private _incomingChannels?: Channel[] | undefined;
    /** The apps installed in this team. */
    private _installedApps?: TeamsAppInstallation[] | undefined;
    /** A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API. */
    private _internalId?: string | undefined;
    /** Whether this team is in read-only mode. */
    private _isArchived?: boolean | undefined;
    /** Members and owners of the team. */
    private _members?: ConversationMember[] | undefined;
    /** Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the team. */
    private _memberSettings?: TeamMemberSettings | undefined;
    /** Settings to configure messaging and mentions in the team. */
    private _messagingSettings?: TeamMessagingSettings | undefined;
    /** The async operations that ran or are running on this team. */
    private _operations?: TeamsAsyncOperation[] | undefined;
    /** The general channel for the team. */
    private _primaryChannel?: Channel | undefined;
    /** The schedule of shifts for this team. */
    private _schedule?: Schedule | undefined;
    /** Optional. Indicates whether the team is intended for a particular use case.  Each team specialization has access to unique behaviors and experiences targeted to its use case. */
    private _specialization?: TeamSpecialization | undefined;
    /** The template this team was created from. See available templates. */
    private _template?: TeamsTemplate | undefined;
    /** The ID of the Azure Active Directory tenant. */
    private _tenantId?: string | undefined;
    /** The visibility of the group and team. Defaults to Public. */
    private _visibility?: TeamVisibilityType | undefined;
    /** A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed. */
    private _webUrl?: string | undefined;
    /**
     * Gets the allChannels property value. List of channels either hosted in or shared with the team (incoming channels).
     * @returns a ChannelInterface
     */
    public get allChannels() {
        return this._allChannels;
    };
    /**
     * Sets the allChannels property value. List of channels either hosted in or shared with the team (incoming channels).
     * @param value Value to set for the allChannels property.
     */
    public set allChannels(value: Channel[] | undefined) {
        if(value) {
            const allChannelsArrValue: ChannelImpl[] = [];
            this.allChannels?.forEach(element => {
                allChannelsArrValue.push((element instanceof ChannelImpl? element:new ChannelImpl(element)));
            });
            this._allChannels = allChannelsArrValue;
        }
    };
    /**
     * Gets the channels property value. The collection of channels and messages associated with the team.
     * @returns a ChannelInterface
     */
    public get channels() {
        return this._channels;
    };
    /**
     * Sets the channels property value. The collection of channels and messages associated with the team.
     * @param value Value to set for the channels property.
     */
    public set channels(value: Channel[] | undefined) {
        if(value) {
            const channelsArrValue: ChannelImpl[] = [];
            this.channels?.forEach(element => {
                channelsArrValue.push((element instanceof ChannelImpl? element:new ChannelImpl(element)));
            });
            this._channels = channelsArrValue;
        }
    };
    /**
     * Gets the classification property value. An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory.
     * @returns a string
     */
    public get classification() {
        return this._classification;
    };
    /**
     * Sets the classification property value. An optional label. Typically describes the data or business sensitivity of the team. Must match one of a pre-configured set in the tenant's directory.
     * @param value Value to set for the classification property.
     */
    public set classification(value: string | undefined) {
        if(value) {
            this._classification = value;
        }
    };
    /**
     * Instantiates a new team and sets the default values.
     * @param teamParameterValue 
     */
    public constructor(teamParameterValue?: Team | undefined) {
        super(teamParameterValue);
        this._allChannels = teamParameterValue?.allChannels;
        this._channels = teamParameterValue?.channels;
        this._classification = teamParameterValue?.classification;
        this._createdDateTime = teamParameterValue?.createdDateTime;
        this._description = teamParameterValue?.description;
        this._displayName = teamParameterValue?.displayName;
        this._funSettings = teamParameterValue?.funSettings;
        this._group = teamParameterValue?.group;
        this._guestSettings = teamParameterValue?.guestSettings;
        this._incomingChannels = teamParameterValue?.incomingChannels;
        this._installedApps = teamParameterValue?.installedApps;
        this._internalId = teamParameterValue?.internalId;
        this._isArchived = teamParameterValue?.isArchived;
        this._members = teamParameterValue?.members;
        this._memberSettings = teamParameterValue?.memberSettings;
        this._messagingSettings = teamParameterValue?.messagingSettings;
        this._operations = teamParameterValue?.operations;
        this._primaryChannel = teamParameterValue?.primaryChannel;
        this._schedule = teamParameterValue?.schedule;
        this._specialization = teamParameterValue?.specialization;
        this._template = teamParameterValue?.template;
        this._tenantId = teamParameterValue?.tenantId;
        this._visibility = teamParameterValue?.visibility;
        this._webUrl = teamParameterValue?.webUrl;
    };
    /**
     * Gets the createdDateTime property value. Timestamp at which the team was created.
     * @returns a Date
     */
    public get createdDateTime() {
        return this._createdDateTime;
    };
    /**
     * Sets the createdDateTime property value. Timestamp at which the team was created.
     * @param value Value to set for the createdDateTime property.
     */
    public set createdDateTime(value: Date | undefined) {
        if(value) {
            this._createdDateTime = value;
        }
    };
    /**
     * Gets the description property value. An optional description for the team. Maximum length: 1024 characters.
     * @returns a string
     */
    public get description() {
        return this._description;
    };
    /**
     * Sets the description property value. An optional description for the team. Maximum length: 1024 characters.
     * @param value Value to set for the description property.
     */
    public set description(value: string | undefined) {
        if(value) {
            this._description = value;
        }
    };
    /**
     * Gets the displayName property value. The name of the team.
     * @returns a string
     */
    public get displayName() {
        return this._displayName;
    };
    /**
     * Sets the displayName property value. The name of the team.
     * @param value Value to set for the displayName property.
     */
    public set displayName(value: string | undefined) {
        if(value) {
            this._displayName = value;
        }
    };
    /**
     * Gets the funSettings property value. Settings to configure use of Giphy, memes, and stickers in the team.
     * @returns a TeamFunSettingsInterface
     */
    public get funSettings() {
        return this._funSettings;
    };
    /**
     * Sets the funSettings property value. Settings to configure use of Giphy, memes, and stickers in the team.
     * @param value Value to set for the funSettings property.
     */
    public set funSettings(value: TeamFunSettings | undefined) {
        if(value) {
            this._funSettings = value instanceof TeamFunSettingsImpl? value : new TeamFunSettingsImpl(value);
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allChannels": n => { this.allChannels = n.getCollectionOfObjectValues<ChannelImpl>(createChannelFromDiscriminatorValue); },
            "channels": n => { this.channels = n.getCollectionOfObjectValues<ChannelImpl>(createChannelFromDiscriminatorValue); },
            "classification": n => { this.classification = n.getStringValue(); },
            "createdDateTime": n => { this.createdDateTime = n.getDateValue(); },
            "description": n => { this.description = n.getStringValue(); },
            "displayName": n => { this.displayName = n.getStringValue(); },
            "funSettings": n => { this.funSettings = n.getObjectValue<TeamFunSettingsImpl>(createTeamFunSettingsFromDiscriminatorValue); },
            "group": n => { this.group = n.getObjectValue<GroupImpl>(createGroupFromDiscriminatorValue); },
            "guestSettings": n => { this.guestSettings = n.getObjectValue<TeamGuestSettingsImpl>(createTeamGuestSettingsFromDiscriminatorValue); },
            "incomingChannels": n => { this.incomingChannels = n.getCollectionOfObjectValues<ChannelImpl>(createChannelFromDiscriminatorValue); },
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
            "tenantId": n => { this.tenantId = n.getStringValue(); },
            "visibility": n => { this.visibility = n.getEnumValue<TeamVisibilityType>(TeamVisibilityType); },
            "webUrl": n => { this.webUrl = n.getStringValue(); },
        };
    };
    /**
     * Gets the group property value. The group property
     * @returns a GroupInterface
     */
    public get group() {
        return this._group;
    };
    /**
     * Sets the group property value. The group property
     * @param value Value to set for the group property.
     */
    public set group(value: Group | undefined) {
        if(value) {
            this._group = value instanceof GroupImpl? value : new GroupImpl(value);
        }
    };
    /**
     * Gets the guestSettings property value. Settings to configure whether guests can create, update, or delete channels in the team.
     * @returns a TeamGuestSettingsInterface
     */
    public get guestSettings() {
        return this._guestSettings;
    };
    /**
     * Sets the guestSettings property value. Settings to configure whether guests can create, update, or delete channels in the team.
     * @param value Value to set for the guestSettings property.
     */
    public set guestSettings(value: TeamGuestSettings | undefined) {
        if(value) {
            this._guestSettings = value instanceof TeamGuestSettingsImpl? value : new TeamGuestSettingsImpl(value);
        }
    };
    /**
     * Gets the incomingChannels property value. List of channels shared with the team.
     * @returns a ChannelInterface
     */
    public get incomingChannels() {
        return this._incomingChannels;
    };
    /**
     * Sets the incomingChannels property value. List of channels shared with the team.
     * @param value Value to set for the incomingChannels property.
     */
    public set incomingChannels(value: Channel[] | undefined) {
        if(value) {
            const incomingChannelsArrValue: ChannelImpl[] = [];
            this.incomingChannels?.forEach(element => {
                incomingChannelsArrValue.push((element instanceof ChannelImpl? element:new ChannelImpl(element)));
            });
            this._incomingChannels = incomingChannelsArrValue;
        }
    };
    /**
     * Gets the installedApps property value. The apps installed in this team.
     * @returns a TeamsAppInstallationInterface
     */
    public get installedApps() {
        return this._installedApps;
    };
    /**
     * Sets the installedApps property value. The apps installed in this team.
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
     * Gets the internalId property value. A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API.
     * @returns a string
     */
    public get internalId() {
        return this._internalId;
    };
    /**
     * Sets the internalId property value. A unique ID for the team that has been used in a few places such as the audit log/Office 365 Management Activity API.
     * @param value Value to set for the internalId property.
     */
    public set internalId(value: string | undefined) {
        if(value) {
            this._internalId = value;
        }
    };
    /**
     * Gets the isArchived property value. Whether this team is in read-only mode.
     * @returns a boolean
     */
    public get isArchived() {
        return this._isArchived;
    };
    /**
     * Sets the isArchived property value. Whether this team is in read-only mode.
     * @param value Value to set for the isArchived property.
     */
    public set isArchived(value: boolean | undefined) {
        if(value) {
            this._isArchived = value;
        }
    };
    /**
     * Gets the members property value. Members and owners of the team.
     * @returns a ConversationMemberInterface
     */
    public get members() {
        return this._members;
    };
    /**
     * Sets the members property value. Members and owners of the team.
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
     * Gets the memberSettings property value. Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the team.
     * @returns a TeamMemberSettingsInterface
     */
    public get memberSettings() {
        return this._memberSettings;
    };
    /**
     * Sets the memberSettings property value. Settings to configure whether members can perform certain actions, for example, create channels and add bots, in the team.
     * @param value Value to set for the memberSettings property.
     */
    public set memberSettings(value: TeamMemberSettings | undefined) {
        if(value) {
            this._memberSettings = value instanceof TeamMemberSettingsImpl? value : new TeamMemberSettingsImpl(value);
        }
    };
    /**
     * Gets the messagingSettings property value. Settings to configure messaging and mentions in the team.
     * @returns a TeamMessagingSettingsInterface
     */
    public get messagingSettings() {
        return this._messagingSettings;
    };
    /**
     * Sets the messagingSettings property value. Settings to configure messaging and mentions in the team.
     * @param value Value to set for the messagingSettings property.
     */
    public set messagingSettings(value: TeamMessagingSettings | undefined) {
        if(value) {
            this._messagingSettings = value instanceof TeamMessagingSettingsImpl? value : new TeamMessagingSettingsImpl(value);
        }
    };
    /**
     * Gets the operations property value. The async operations that ran or are running on this team.
     * @returns a TeamsAsyncOperationInterface
     */
    public get operations() {
        return this._operations;
    };
    /**
     * Sets the operations property value. The async operations that ran or are running on this team.
     * @param value Value to set for the operations property.
     */
    public set operations(value: TeamsAsyncOperation[] | undefined) {
        if(value) {
            const operationsArrValue: TeamsAsyncOperationImpl[] = [];
            this.operations?.forEach(element => {
                operationsArrValue.push((element instanceof TeamsAsyncOperationImpl? element:new TeamsAsyncOperationImpl(element)));
            });
            this._operations = operationsArrValue;
        }
    };
    /**
     * Gets the primaryChannel property value. The general channel for the team.
     * @returns a ChannelInterface
     */
    public get primaryChannel() {
        return this._primaryChannel;
    };
    /**
     * Sets the primaryChannel property value. The general channel for the team.
     * @param value Value to set for the primaryChannel property.
     */
    public set primaryChannel(value: Channel | undefined) {
        if(value) {
            this._primaryChannel = value instanceof ChannelImpl? value : new ChannelImpl(value);
        }
    };
    /**
     * Gets the schedule property value. The schedule of shifts for this team.
     * @returns a ScheduleInterface
     */
    public get schedule() {
        return this._schedule;
    };
    /**
     * Sets the schedule property value. The schedule of shifts for this team.
     * @param value Value to set for the schedule property.
     */
    public set schedule(value: Schedule | undefined) {
        if(value) {
            this._schedule = value instanceof ScheduleImpl? value : new ScheduleImpl(value);
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allChannels && this.allChannels.length != 0){        const allChannelsArrValue: ChannelImpl[] = [];
        this.allChannels?.forEach(element => {
            allChannelsArrValue.push((element instanceof ChannelImpl? element:new ChannelImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ChannelImpl>("allChannels", allChannelsArrValue);
        }
        if(this.channels && this.channels.length != 0){        const channelsArrValue: ChannelImpl[] = [];
        this.channels?.forEach(element => {
            channelsArrValue.push((element instanceof ChannelImpl? element:new ChannelImpl(element)));
        });
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
            writer.writeObjectValue<TeamFunSettingsImpl>("funSettings", (!this.funSettings || this.funSettings instanceof TeamFunSettingsImpl? this.funSettings : new TeamFunSettingsImpl(this.funSettings)));
        }
        if(this.group){
            writer.writeObjectValue<GroupImpl>("group", (!this.group || this.group instanceof GroupImpl? this.group : new GroupImpl(this.group)));
        }
        if(this.guestSettings){
            writer.writeObjectValue<TeamGuestSettingsImpl>("guestSettings", (!this.guestSettings || this.guestSettings instanceof TeamGuestSettingsImpl? this.guestSettings : new TeamGuestSettingsImpl(this.guestSettings)));
        }
        if(this.incomingChannels && this.incomingChannels.length != 0){        const incomingChannelsArrValue: ChannelImpl[] = [];
        this.incomingChannels?.forEach(element => {
            incomingChannelsArrValue.push((element instanceof ChannelImpl? element:new ChannelImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ChannelImpl>("incomingChannels", incomingChannelsArrValue);
        }
        if(this.installedApps && this.installedApps.length != 0){        const installedAppsArrValue: TeamsAppInstallationImpl[] = [];
        this.installedApps?.forEach(element => {
            installedAppsArrValue.push((element instanceof TeamsAppInstallationImpl? element:new TeamsAppInstallationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TeamsAppInstallationImpl>("installedApps", installedAppsArrValue);
        }
        if(this.internalId){
            writer.writeStringValue("internalId", this.internalId);
        }
        if(this.isArchived){
            writer.writeBooleanValue("isArchived", this.isArchived);
        }
        if(this.members && this.members.length != 0){        const membersArrValue: ConversationMemberImpl[] = [];
        this.members?.forEach(element => {
            membersArrValue.push((element instanceof ConversationMemberImpl? element:new ConversationMemberImpl(element)));
        });
            writer.writeCollectionOfObjectValues<ConversationMemberImpl>("members", membersArrValue);
        }
        if(this.memberSettings){
            writer.writeObjectValue<TeamMemberSettingsImpl>("memberSettings", (!this.memberSettings || this.memberSettings instanceof TeamMemberSettingsImpl? this.memberSettings : new TeamMemberSettingsImpl(this.memberSettings)));
        }
        if(this.messagingSettings){
            writer.writeObjectValue<TeamMessagingSettingsImpl>("messagingSettings", (!this.messagingSettings || this.messagingSettings instanceof TeamMessagingSettingsImpl? this.messagingSettings : new TeamMessagingSettingsImpl(this.messagingSettings)));
        }
        if(this.operations && this.operations.length != 0){        const operationsArrValue: TeamsAsyncOperationImpl[] = [];
        this.operations?.forEach(element => {
            operationsArrValue.push((element instanceof TeamsAsyncOperationImpl? element:new TeamsAsyncOperationImpl(element)));
        });
            writer.writeCollectionOfObjectValues<TeamsAsyncOperationImpl>("operations", operationsArrValue);
        }
        if(this.primaryChannel){
            writer.writeObjectValue<ChannelImpl>("primaryChannel", (!this.primaryChannel || this.primaryChannel instanceof ChannelImpl? this.primaryChannel : new ChannelImpl(this.primaryChannel)));
        }
        if(this.schedule){
            writer.writeObjectValue<ScheduleImpl>("schedule", (!this.schedule || this.schedule instanceof ScheduleImpl? this.schedule : new ScheduleImpl(this.schedule)));
        }
        if(this.specialization){
            writer.writeEnumValue<TeamSpecialization>("specialization", this.specialization);
        }
        if(this.template){
            writer.writeObjectValue<TeamsTemplateImpl>("template", (!this.template || this.template instanceof TeamsTemplateImpl? this.template : new TeamsTemplateImpl(this.template)));
        }
        if(this.tenantId){
            writer.writeStringValue("tenantId", this.tenantId);
        }
        if(this.visibility){
            writer.writeEnumValue<TeamVisibilityType>("visibility", this.visibility);
        }
        if(this.webUrl){
            writer.writeStringValue("webUrl", this.webUrl);
        }
    };
    /**
     * Gets the specialization property value. Optional. Indicates whether the team is intended for a particular use case.  Each team specialization has access to unique behaviors and experiences targeted to its use case.
     * @returns a teamSpecialization
     */
    public get specialization() {
        return this._specialization;
    };
    /**
     * Sets the specialization property value. Optional. Indicates whether the team is intended for a particular use case.  Each team specialization has access to unique behaviors and experiences targeted to its use case.
     * @param value Value to set for the specialization property.
     */
    public set specialization(value: TeamSpecialization | undefined) {
        if(value) {
            this._specialization = value;
        }
    };
    /**
     * Gets the template property value. The template this team was created from. See available templates.
     * @returns a TeamsTemplateInterface
     */
    public get template() {
        return this._template;
    };
    /**
     * Sets the template property value. The template this team was created from. See available templates.
     * @param value Value to set for the template property.
     */
    public set template(value: TeamsTemplate | undefined) {
        if(value) {
            this._template = value instanceof TeamsTemplateImpl? value : new TeamsTemplateImpl(value);
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
     * Gets the visibility property value. The visibility of the group and team. Defaults to Public.
     * @returns a teamVisibilityType
     */
    public get visibility() {
        return this._visibility;
    };
    /**
     * Sets the visibility property value. The visibility of the group and team. Defaults to Public.
     * @param value Value to set for the visibility property.
     */
    public set visibility(value: TeamVisibilityType | undefined) {
        if(value) {
            this._visibility = value;
        }
    };
    /**
     * Gets the webUrl property value. A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed.
     * @returns a string
     */
    public get webUrl() {
        return this._webUrl;
    };
    /**
     * Sets the webUrl property value. A hyperlink that will go to the team in the Microsoft Teams client. This is the URL that you get when you right-click a team in the Microsoft Teams client and select Get link to team. This URL should be treated as an opaque blob, and not parsed.
     * @param value Value to set for the webUrl property.
     */
    public set webUrl(value: string | undefined) {
        if(value) {
            this._webUrl = value;
        }
    };
}
