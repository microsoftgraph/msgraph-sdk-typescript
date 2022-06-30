import {AudioConferencing} from './audioConferencing';
import {BroadcastMeetingSettings} from './broadcastMeetingSettings';
import {ChatInfo} from './chatInfo';
import {createAudioConferencingFromDiscriminatorValue} from './createAudioConferencingFromDiscriminatorValue';
import {createBroadcastMeetingSettingsFromDiscriminatorValue} from './createBroadcastMeetingSettingsFromDiscriminatorValue';
import {createChatInfoFromDiscriminatorValue} from './createChatInfoFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createLobbyBypassSettingsFromDiscriminatorValue} from './createLobbyBypassSettingsFromDiscriminatorValue';
import {createMeetingAttendanceReportFromDiscriminatorValue} from './createMeetingAttendanceReportFromDiscriminatorValue';
import {createMeetingParticipantsFromDiscriminatorValue} from './createMeetingParticipantsFromDiscriminatorValue';
import {AudioConferencingImpl, BroadcastMeetingSettingsImpl, ChatInfoImpl, EntityImpl, ItemBodyImpl, LobbyBypassSettingsImpl, MeetingAttendanceReportImpl, MeetingParticipantsImpl} from './index';
import {ItemBody} from './itemBody';
import {LobbyBypassSettings} from './lobbyBypassSettings';
import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {MeetingChatMode} from './meetingChatMode';
import {MeetingParticipants} from './meetingParticipants';
import {OnlineMeeting} from './onlineMeeting';
import {OnlineMeetingPresenters} from './onlineMeetingPresenters';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

/** Provides operations to manage the cloudCommunications singleton. */
export class OnlineMeetingImpl extends EntityImpl implements OnlineMeeting {
    /** Indicates whether attendees can turn on their camera. */
    private _allowAttendeeToEnableCamera?: boolean | undefined;
    /** Indicates whether attendees can turn on their microphone. */
    private _allowAttendeeToEnableMic?: boolean | undefined;
    /** Specifies who can be a presenter in a meeting. */
    private _allowedPresenters?: OnlineMeetingPresenters | undefined;
    /** Specifies the mode of meeting chat. */
    private _allowMeetingChat?: MeetingChatMode | undefined;
    /** Indicates if Teams reactions are enabled for the meeting. */
    private _allowTeamworkReactions?: boolean | undefined;
    /** The attendance reports of an online meeting. Read-only. */
    private _attendanceReports?: MeetingAttendanceReport[] | undefined;
    /** The content stream of the attendee report of a Teams live event. Read-only. */
    private _attendeeReport?: string | undefined;
    /** The phone access (dial-in) information for an online meeting. Read-only. */
    private _audioConferencing?: AudioConferencing | undefined;
    /** Settings related to a live event. */
    private _broadcastSettings?: BroadcastMeetingSettings | undefined;
    /** The chat information associated with this online meeting. */
    private _chatInfo?: ChatInfo | undefined;
    /** The meeting creation time in UTC. Read-only. */
    private _creationDateTime?: Date | undefined;
    /** The meeting end time in UTC. */
    private _endDateTime?: Date | undefined;
    /** The external ID. A custom ID. Optional. */
    private _externalId?: string | undefined;
    /** Indicates whether this is a Teams live event. */
    private _isBroadcast?: boolean | undefined;
    /** Indicates whether to announce when callers join or leave. */
    private _isEntryExitAnnounced?: boolean | undefined;
    /** The join information in the language and locale variant specified in 'Accept-Language' request HTTP header. Read-only. */
    private _joinInformation?: ItemBody | undefined;
    /** The join URL of the online meeting. Read-only. */
    private _joinWebUrl?: string | undefined;
    /** Specifies which participants can bypass the meeting lobby. */
    private _lobbyBypassSettings?: LobbyBypassSettings | undefined;
    /** The participants associated with the online meeting. This includes the organizer and the attendees. */
    private _participants?: MeetingParticipants | undefined;
    /** Indicates whether to record the meeting automatically. */
    private _recordAutomatically?: boolean | undefined;
    /** The meeting start time in UTC. */
    private _startDateTime?: Date | undefined;
    /** The subject of the online meeting. */
    private _subject?: string | undefined;
    /** The video teleconferencing ID. Read-only. */
    private _videoTeleconferenceId?: string | undefined;
    /**
     * Gets the allowAttendeeToEnableCamera property value. Indicates whether attendees can turn on their camera.
     * @returns a boolean
     */
    public get allowAttendeeToEnableCamera() {
        return this._allowAttendeeToEnableCamera;
    };
    /**
     * Sets the allowAttendeeToEnableCamera property value. Indicates whether attendees can turn on their camera.
     * @param value Value to set for the allowAttendeeToEnableCamera property.
     */
    public set allowAttendeeToEnableCamera(value: boolean | undefined) {
        if(value) {
            this._allowAttendeeToEnableCamera = value;
        }
    };
    /**
     * Gets the allowAttendeeToEnableMic property value. Indicates whether attendees can turn on their microphone.
     * @returns a boolean
     */
    public get allowAttendeeToEnableMic() {
        return this._allowAttendeeToEnableMic;
    };
    /**
     * Sets the allowAttendeeToEnableMic property value. Indicates whether attendees can turn on their microphone.
     * @param value Value to set for the allowAttendeeToEnableMic property.
     */
    public set allowAttendeeToEnableMic(value: boolean | undefined) {
        if(value) {
            this._allowAttendeeToEnableMic = value;
        }
    };
    /**
     * Gets the allowedPresenters property value. Specifies who can be a presenter in a meeting.
     * @returns a onlineMeetingPresenters
     */
    public get allowedPresenters() {
        return this._allowedPresenters;
    };
    /**
     * Sets the allowedPresenters property value. Specifies who can be a presenter in a meeting.
     * @param value Value to set for the allowedPresenters property.
     */
    public set allowedPresenters(value: OnlineMeetingPresenters | undefined) {
        if(value) {
            this._allowedPresenters = value;
        }
    };
    /**
     * Gets the allowMeetingChat property value. Specifies the mode of meeting chat.
     * @returns a meetingChatMode
     */
    public get allowMeetingChat() {
        return this._allowMeetingChat;
    };
    /**
     * Sets the allowMeetingChat property value. Specifies the mode of meeting chat.
     * @param value Value to set for the allowMeetingChat property.
     */
    public set allowMeetingChat(value: MeetingChatMode | undefined) {
        if(value) {
            this._allowMeetingChat = value;
        }
    };
    /**
     * Gets the allowTeamworkReactions property value. Indicates if Teams reactions are enabled for the meeting.
     * @returns a boolean
     */
    public get allowTeamworkReactions() {
        return this._allowTeamworkReactions;
    };
    /**
     * Sets the allowTeamworkReactions property value. Indicates if Teams reactions are enabled for the meeting.
     * @param value Value to set for the allowTeamworkReactions property.
     */
    public set allowTeamworkReactions(value: boolean | undefined) {
        if(value) {
            this._allowTeamworkReactions = value;
        }
    };
    /**
     * Gets the attendanceReports property value. The attendance reports of an online meeting. Read-only.
     * @returns a MeetingAttendanceReportInterface
     */
    public get attendanceReports() {
        return this._attendanceReports;
    };
    /**
     * Sets the attendanceReports property value. The attendance reports of an online meeting. Read-only.
     * @param value Value to set for the attendanceReports property.
     */
    public set attendanceReports(value: MeetingAttendanceReport[] | undefined) {
        if(value) {
            const attendanceReportsArrValue: MeetingAttendanceReportImpl[] = [];
            this.attendanceReports?.forEach(element => {
                attendanceReportsArrValue.push((element instanceof MeetingAttendanceReportImpl? element:new MeetingAttendanceReportImpl(element)));
            });
            this._attendanceReports = attendanceReportsArrValue;
        }
    };
    /**
     * Gets the attendeeReport property value. The content stream of the attendee report of a Teams live event. Read-only.
     * @returns a binary
     */
    public get attendeeReport() {
        return this._attendeeReport;
    };
    /**
     * Sets the attendeeReport property value. The content stream of the attendee report of a Teams live event. Read-only.
     * @param value Value to set for the attendeeReport property.
     */
    public set attendeeReport(value: string | undefined) {
        if(value) {
            this._attendeeReport = value;
        }
    };
    /**
     * Gets the audioConferencing property value. The phone access (dial-in) information for an online meeting. Read-only.
     * @returns a AudioConferencingInterface
     */
    public get audioConferencing() {
        return this._audioConferencing;
    };
    /**
     * Sets the audioConferencing property value. The phone access (dial-in) information for an online meeting. Read-only.
     * @param value Value to set for the audioConferencing property.
     */
    public set audioConferencing(value: AudioConferencing | undefined) {
        if(value) {
            this._audioConferencing = value instanceof AudioConferencingImpl? value : new AudioConferencingImpl(value);
        }
    };
    /**
     * Gets the broadcastSettings property value. Settings related to a live event.
     * @returns a BroadcastMeetingSettingsInterface
     */
    public get broadcastSettings() {
        return this._broadcastSettings;
    };
    /**
     * Sets the broadcastSettings property value. Settings related to a live event.
     * @param value Value to set for the broadcastSettings property.
     */
    public set broadcastSettings(value: BroadcastMeetingSettings | undefined) {
        if(value) {
            this._broadcastSettings = value instanceof BroadcastMeetingSettingsImpl? value : new BroadcastMeetingSettingsImpl(value);
        }
    };
    /**
     * Gets the chatInfo property value. The chat information associated with this online meeting.
     * @returns a ChatInfoInterface
     */
    public get chatInfo() {
        return this._chatInfo;
    };
    /**
     * Sets the chatInfo property value. The chat information associated with this online meeting.
     * @param value Value to set for the chatInfo property.
     */
    public set chatInfo(value: ChatInfo | undefined) {
        if(value) {
            this._chatInfo = value instanceof ChatInfoImpl? value : new ChatInfoImpl(value);
        }
    };
    /**
     * Instantiates a new onlineMeeting and sets the default values.
     * @param onlineMeetingParameterValue 
     */
    public constructor(onlineMeetingParameterValue?: OnlineMeeting | undefined) {
        super(onlineMeetingParameterValue);
        this._allowAttendeeToEnableCamera = onlineMeetingParameterValue?.allowAttendeeToEnableCamera;
        this._allowAttendeeToEnableMic = onlineMeetingParameterValue?.allowAttendeeToEnableMic;
        this._allowedPresenters = onlineMeetingParameterValue?.allowedPresenters;
        this._allowMeetingChat = onlineMeetingParameterValue?.allowMeetingChat;
        this._allowTeamworkReactions = onlineMeetingParameterValue?.allowTeamworkReactions;
        this._attendanceReports = onlineMeetingParameterValue?.attendanceReports;
        this._attendeeReport = onlineMeetingParameterValue?.attendeeReport;
        this._audioConferencing = onlineMeetingParameterValue?.audioConferencing;
        this._broadcastSettings = onlineMeetingParameterValue?.broadcastSettings;
        this._chatInfo = onlineMeetingParameterValue?.chatInfo;
        this._creationDateTime = onlineMeetingParameterValue?.creationDateTime;
        this._endDateTime = onlineMeetingParameterValue?.endDateTime;
        this._externalId = onlineMeetingParameterValue?.externalId;
        this._isBroadcast = onlineMeetingParameterValue?.isBroadcast;
        this._isEntryExitAnnounced = onlineMeetingParameterValue?.isEntryExitAnnounced;
        this._joinInformation = onlineMeetingParameterValue?.joinInformation;
        this._joinWebUrl = onlineMeetingParameterValue?.joinWebUrl;
        this._lobbyBypassSettings = onlineMeetingParameterValue?.lobbyBypassSettings;
        this._participants = onlineMeetingParameterValue?.participants;
        this._recordAutomatically = onlineMeetingParameterValue?.recordAutomatically;
        this._startDateTime = onlineMeetingParameterValue?.startDateTime;
        this._subject = onlineMeetingParameterValue?.subject;
        this._videoTeleconferenceId = onlineMeetingParameterValue?.videoTeleconferenceId;
    };
    /**
     * Gets the creationDateTime property value. The meeting creation time in UTC. Read-only.
     * @returns a Date
     */
    public get creationDateTime() {
        return this._creationDateTime;
    };
    /**
     * Sets the creationDateTime property value. The meeting creation time in UTC. Read-only.
     * @param value Value to set for the creationDateTime property.
     */
    public set creationDateTime(value: Date | undefined) {
        if(value) {
            this._creationDateTime = value;
        }
    };
    /**
     * Gets the endDateTime property value. The meeting end time in UTC.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Sets the endDateTime property value. The meeting end time in UTC.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        if(value) {
            this._endDateTime = value;
        }
    };
    /**
     * Gets the externalId property value. The external ID. A custom ID. Optional.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Sets the externalId property value. The external ID. A custom ID. Optional.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        if(value) {
            this._externalId = value;
        }
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {...super.getFieldDeserializers(),
            "allowAttendeeToEnableCamera": n => { this.allowAttendeeToEnableCamera = n.getBooleanValue(); },
            "allowAttendeeToEnableMic": n => { this.allowAttendeeToEnableMic = n.getBooleanValue(); },
            "allowedPresenters": n => { this.allowedPresenters = n.getEnumValue<OnlineMeetingPresenters>(OnlineMeetingPresenters); },
            "allowMeetingChat": n => { this.allowMeetingChat = n.getEnumValue<MeetingChatMode>(MeetingChatMode); },
            "allowTeamworkReactions": n => { this.allowTeamworkReactions = n.getBooleanValue(); },
            "attendanceReports": n => { this.attendanceReports = n.getCollectionOfObjectValues<MeetingAttendanceReportImpl>(createMeetingAttendanceReportFromDiscriminatorValue); },
            "attendeeReport": n => { this.attendeeReport = n.getStringValue(); },
            "audioConferencing": n => { this.audioConferencing = n.getObjectValue<AudioConferencingImpl>(createAudioConferencingFromDiscriminatorValue); },
            "broadcastSettings": n => { this.broadcastSettings = n.getObjectValue<BroadcastMeetingSettingsImpl>(createBroadcastMeetingSettingsFromDiscriminatorValue); },
            "chatInfo": n => { this.chatInfo = n.getObjectValue<ChatInfoImpl>(createChatInfoFromDiscriminatorValue); },
            "creationDateTime": n => { this.creationDateTime = n.getDateValue(); },
            "endDateTime": n => { this.endDateTime = n.getDateValue(); },
            "externalId": n => { this.externalId = n.getStringValue(); },
            "isBroadcast": n => { this.isBroadcast = n.getBooleanValue(); },
            "isEntryExitAnnounced": n => { this.isEntryExitAnnounced = n.getBooleanValue(); },
            "joinInformation": n => { this.joinInformation = n.getObjectValue<ItemBodyImpl>(createItemBodyFromDiscriminatorValue); },
            "joinWebUrl": n => { this.joinWebUrl = n.getStringValue(); },
            "lobbyBypassSettings": n => { this.lobbyBypassSettings = n.getObjectValue<LobbyBypassSettingsImpl>(createLobbyBypassSettingsFromDiscriminatorValue); },
            "participants": n => { this.participants = n.getObjectValue<MeetingParticipantsImpl>(createMeetingParticipantsFromDiscriminatorValue); },
            "recordAutomatically": n => { this.recordAutomatically = n.getBooleanValue(); },
            "startDateTime": n => { this.startDateTime = n.getDateValue(); },
            "subject": n => { this.subject = n.getStringValue(); },
            "videoTeleconferenceId": n => { this.videoTeleconferenceId = n.getStringValue(); },
        };
    };
    /**
     * Gets the isBroadcast property value. Indicates whether this is a Teams live event.
     * @returns a boolean
     */
    public get isBroadcast() {
        return this._isBroadcast;
    };
    /**
     * Sets the isBroadcast property value. Indicates whether this is a Teams live event.
     * @param value Value to set for the isBroadcast property.
     */
    public set isBroadcast(value: boolean | undefined) {
        if(value) {
            this._isBroadcast = value;
        }
    };
    /**
     * Gets the isEntryExitAnnounced property value. Indicates whether to announce when callers join or leave.
     * @returns a boolean
     */
    public get isEntryExitAnnounced() {
        return this._isEntryExitAnnounced;
    };
    /**
     * Sets the isEntryExitAnnounced property value. Indicates whether to announce when callers join or leave.
     * @param value Value to set for the isEntryExitAnnounced property.
     */
    public set isEntryExitAnnounced(value: boolean | undefined) {
        if(value) {
            this._isEntryExitAnnounced = value;
        }
    };
    /**
     * Gets the joinInformation property value. The join information in the language and locale variant specified in 'Accept-Language' request HTTP header. Read-only.
     * @returns a ItemBodyInterface
     */
    public get joinInformation() {
        return this._joinInformation;
    };
    /**
     * Sets the joinInformation property value. The join information in the language and locale variant specified in 'Accept-Language' request HTTP header. Read-only.
     * @param value Value to set for the joinInformation property.
     */
    public set joinInformation(value: ItemBody | undefined) {
        if(value) {
            this._joinInformation = value instanceof ItemBodyImpl? value : new ItemBodyImpl(value);
        }
    };
    /**
     * Gets the joinWebUrl property value. The join URL of the online meeting. Read-only.
     * @returns a string
     */
    public get joinWebUrl() {
        return this._joinWebUrl;
    };
    /**
     * Sets the joinWebUrl property value. The join URL of the online meeting. Read-only.
     * @param value Value to set for the joinWebUrl property.
     */
    public set joinWebUrl(value: string | undefined) {
        if(value) {
            this._joinWebUrl = value;
        }
    };
    /**
     * Gets the lobbyBypassSettings property value. Specifies which participants can bypass the meeting lobby.
     * @returns a LobbyBypassSettingsInterface
     */
    public get lobbyBypassSettings() {
        return this._lobbyBypassSettings;
    };
    /**
     * Sets the lobbyBypassSettings property value. Specifies which participants can bypass the meeting lobby.
     * @param value Value to set for the lobbyBypassSettings property.
     */
    public set lobbyBypassSettings(value: LobbyBypassSettings | undefined) {
        if(value) {
            this._lobbyBypassSettings = value instanceof LobbyBypassSettingsImpl? value : new LobbyBypassSettingsImpl(value);
        }
    };
    /**
     * Gets the participants property value. The participants associated with the online meeting. This includes the organizer and the attendees.
     * @returns a MeetingParticipantsInterface
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Sets the participants property value. The participants associated with the online meeting. This includes the organizer and the attendees.
     * @param value Value to set for the participants property.
     */
    public set participants(value: MeetingParticipants | undefined) {
        if(value) {
            this._participants = value instanceof MeetingParticipantsImpl? value : new MeetingParticipantsImpl(value);
        }
    };
    /**
     * Gets the recordAutomatically property value. Indicates whether to record the meeting automatically.
     * @returns a boolean
     */
    public get recordAutomatically() {
        return this._recordAutomatically;
    };
    /**
     * Sets the recordAutomatically property value. Indicates whether to record the meeting automatically.
     * @param value Value to set for the recordAutomatically property.
     */
    public set recordAutomatically(value: boolean | undefined) {
        if(value) {
            this._recordAutomatically = value;
        }
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        if(this.allowAttendeeToEnableCamera){
            writer.writeBooleanValue("allowAttendeeToEnableCamera", this.allowAttendeeToEnableCamera);
        }
        if(this.allowAttendeeToEnableMic){
            writer.writeBooleanValue("allowAttendeeToEnableMic", this.allowAttendeeToEnableMic);
        }
        if(this.allowedPresenters){
            writer.writeEnumValue<OnlineMeetingPresenters>("allowedPresenters", this.allowedPresenters);
        }
        if(this.allowMeetingChat){
            writer.writeEnumValue<MeetingChatMode>("allowMeetingChat", this.allowMeetingChat);
        }
        if(this.allowTeamworkReactions){
            writer.writeBooleanValue("allowTeamworkReactions", this.allowTeamworkReactions);
        }
        if(this.attendanceReports && this.attendanceReports.length != 0){        const attendanceReportsArrValue: MeetingAttendanceReportImpl[] = [];
        this.attendanceReports?.forEach(element => {
            attendanceReportsArrValue.push((element instanceof MeetingAttendanceReportImpl? element:new MeetingAttendanceReportImpl(element)));
        });
            writer.writeCollectionOfObjectValues<MeetingAttendanceReportImpl>("attendanceReports", attendanceReportsArrValue);
        }
        if(this.attendeeReport){
            writer.writeStringValue("attendeeReport", this.attendeeReport);
        }
        if(this.audioConferencing){
            writer.writeObjectValue<AudioConferencingImpl>("audioConferencing", (!this.audioConferencing || this.audioConferencing instanceof AudioConferencingImpl? this.audioConferencing : new AudioConferencingImpl(this.audioConferencing)));
        }
        if(this.broadcastSettings){
            writer.writeObjectValue<BroadcastMeetingSettingsImpl>("broadcastSettings", (!this.broadcastSettings || this.broadcastSettings instanceof BroadcastMeetingSettingsImpl? this.broadcastSettings : new BroadcastMeetingSettingsImpl(this.broadcastSettings)));
        }
        if(this.chatInfo){
            writer.writeObjectValue<ChatInfoImpl>("chatInfo", (!this.chatInfo || this.chatInfo instanceof ChatInfoImpl? this.chatInfo : new ChatInfoImpl(this.chatInfo)));
        }
        if(this.creationDateTime){
            writer.writeDateValue("creationDateTime", this.creationDateTime);
        }
        if(this.endDateTime){
            writer.writeDateValue("endDateTime", this.endDateTime);
        }
        if(this.externalId){
            writer.writeStringValue("externalId", this.externalId);
        }
        if(this.isBroadcast){
            writer.writeBooleanValue("isBroadcast", this.isBroadcast);
        }
        if(this.isEntryExitAnnounced){
            writer.writeBooleanValue("isEntryExitAnnounced", this.isEntryExitAnnounced);
        }
        if(this.joinInformation){
            writer.writeObjectValue<ItemBodyImpl>("joinInformation", (!this.joinInformation || this.joinInformation instanceof ItemBodyImpl? this.joinInformation : new ItemBodyImpl(this.joinInformation)));
        }
        if(this.joinWebUrl){
            writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        }
        if(this.lobbyBypassSettings){
            writer.writeObjectValue<LobbyBypassSettingsImpl>("lobbyBypassSettings", (!this.lobbyBypassSettings || this.lobbyBypassSettings instanceof LobbyBypassSettingsImpl? this.lobbyBypassSettings : new LobbyBypassSettingsImpl(this.lobbyBypassSettings)));
        }
        if(this.participants){
            writer.writeObjectValue<MeetingParticipantsImpl>("participants", (!this.participants || this.participants instanceof MeetingParticipantsImpl? this.participants : new MeetingParticipantsImpl(this.participants)));
        }
        if(this.recordAutomatically){
            writer.writeBooleanValue("recordAutomatically", this.recordAutomatically);
        }
        if(this.startDateTime){
            writer.writeDateValue("startDateTime", this.startDateTime);
        }
        if(this.subject){
            writer.writeStringValue("subject", this.subject);
        }
        if(this.videoTeleconferenceId){
            writer.writeStringValue("videoTeleconferenceId", this.videoTeleconferenceId);
        }
    };
    /**
     * Gets the startDateTime property value. The meeting start time in UTC.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Sets the startDateTime property value. The meeting start time in UTC.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        if(value) {
            this._startDateTime = value;
        }
    };
    /**
     * Gets the subject property value. The subject of the online meeting.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Sets the subject property value. The subject of the online meeting.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        if(value) {
            this._subject = value;
        }
    };
    /**
     * Gets the videoTeleconferenceId property value. The video teleconferencing ID. Read-only.
     * @returns a string
     */
    public get videoTeleconferenceId() {
        return this._videoTeleconferenceId;
    };
    /**
     * Sets the videoTeleconferenceId property value. The video teleconferencing ID. Read-only.
     * @param value Value to set for the videoTeleconferenceId property.
     */
    public set videoTeleconferenceId(value: string | undefined) {
        if(value) {
            this._videoTeleconferenceId = value;
        }
    };
}
