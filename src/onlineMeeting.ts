import {Entity} from './applicationTemplates/entity';
import {AudioConferencing} from './audioConferencing';
import {ChatInfo} from './chatInfo';
import {ItemBody} from './itemBody';
import {LobbyBypassSettings} from './lobbyBypassSettings';
import {MeetingChatMode} from './meetingChatMode';
import {MeetingParticipants} from './meetingParticipants';
import {OnlineMeetingPresenters} from './onlineMeetingPresenters';
import {SerializationWriter, ParseNode, Parsable} from '@microsoft/kiota-abstractions';

export class OnlineMeeting extends Entity implements Parsable {
    /** Indicates whether attendees can turn on their camera.  */
    private _allowAttendeeToEnableCamera?: boolean | undefined;
    /** Indicates whether attendees can turn on their microphone.  */
    private _allowAttendeeToEnableMic?: boolean | undefined;
    /** Specifies who can be a presenter in a meeting. Possible values are everyone, organization, roleIsPresenter, organizer, and unknownFutureValue.  */
    private _allowedPresenters?: OnlineMeetingPresenters | undefined;
    /** Specifies the mode of meeting chat.  */
    private _allowMeetingChat?: MeetingChatMode | undefined;
    /** Indicates if Teams reactions are enabled for the meeting.  */
    private _allowTeamworkReactions?: boolean | undefined;
    /** The phone access (dial-in) information for an online meeting. Read-only.  */
    private _audioConferencing?: AudioConferencing | undefined;
    /** The chat information associated with this online meeting.  */
    private _chatInfo?: ChatInfo | undefined;
    /** The meeting creation time in UTC. Read-only.  */
    private _creationDateTime?: Date | undefined;
    /** The meeting end time in UTC.  */
    private _endDateTime?: Date | undefined;
    /** The external ID. A custom ID. Optional.  */
    private _externalId?: string | undefined;
    /** Indicates whether to announce when callers join or leave.  */
    private _isEntryExitAnnounced?: boolean | undefined;
    /** The join information in the language and locale variant specified in 'Accept-Language' request HTTP header. Read-only  */
    private _joinInformation?: ItemBody | undefined;
    /** The join URL of the online meeting. Read-only.  */
    private _joinWebUrl?: string | undefined;
    /** Specifies which participants can bypass the meeting lobby.  */
    private _lobbyBypassSettings?: LobbyBypassSettings | undefined;
    /** The participants associated with the online meeting. This includes the organizer and the attendees.  */
    private _participants?: MeetingParticipants | undefined;
    /** The meeting start time in UTC.  */
    private _startDateTime?: Date | undefined;
    /** The subject of the online meeting.  */
    private _subject?: string | undefined;
    /** The video teleconferencing ID. Read-only.  */
    private _videoTeleconferenceId?: string | undefined;
    /**
     * Instantiates a new onlineMeeting and sets the default values.
     */
    public constructor() {
        super();
    };
    /**
     * Gets the allowAttendeeToEnableCamera property value. Indicates whether attendees can turn on their camera.
     * @returns a boolean
     */
    public get allowAttendeeToEnableCamera() {
        return this._allowAttendeeToEnableCamera;
    };
    /**
     * Gets the allowAttendeeToEnableMic property value. Indicates whether attendees can turn on their microphone.
     * @returns a boolean
     */
    public get allowAttendeeToEnableMic() {
        return this._allowAttendeeToEnableMic;
    };
    /**
     * Gets the allowedPresenters property value. Specifies who can be a presenter in a meeting. Possible values are everyone, organization, roleIsPresenter, organizer, and unknownFutureValue.
     * @returns a onlineMeetingPresenters
     */
    public get allowedPresenters() {
        return this._allowedPresenters;
    };
    /**
     * Gets the allowMeetingChat property value. Specifies the mode of meeting chat.
     * @returns a meetingChatMode
     */
    public get allowMeetingChat() {
        return this._allowMeetingChat;
    };
    /**
     * Gets the allowTeamworkReactions property value. Indicates if Teams reactions are enabled for the meeting.
     * @returns a boolean
     */
    public get allowTeamworkReactions() {
        return this._allowTeamworkReactions;
    };
    /**
     * Gets the audioConferencing property value. The phone access (dial-in) information for an online meeting. Read-only.
     * @returns a audioConferencing
     */
    public get audioConferencing() {
        return this._audioConferencing;
    };
    /**
     * Gets the chatInfo property value. The chat information associated with this online meeting.
     * @returns a chatInfo
     */
    public get chatInfo() {
        return this._chatInfo;
    };
    /**
     * Gets the creationDateTime property value. The meeting creation time in UTC. Read-only.
     * @returns a Date
     */
    public get creationDateTime() {
        return this._creationDateTime;
    };
    /**
     * Gets the endDateTime property value. The meeting end time in UTC.
     * @returns a Date
     */
    public get endDateTime() {
        return this._endDateTime;
    };
    /**
     * Gets the externalId property value. The external ID. A custom ID. Optional.
     * @returns a string
     */
    public get externalId() {
        return this._externalId;
    };
    /**
     * Gets the isEntryExitAnnounced property value. Indicates whether to announce when callers join or leave.
     * @returns a boolean
     */
    public get isEntryExitAnnounced() {
        return this._isEntryExitAnnounced;
    };
    /**
     * Gets the joinInformation property value. The join information in the language and locale variant specified in 'Accept-Language' request HTTP header. Read-only
     * @returns a itemBody
     */
    public get joinInformation() {
        return this._joinInformation;
    };
    /**
     * Gets the joinWebUrl property value. The join URL of the online meeting. Read-only.
     * @returns a string
     */
    public get joinWebUrl() {
        return this._joinWebUrl;
    };
    /**
     * Gets the lobbyBypassSettings property value. Specifies which participants can bypass the meeting lobby.
     * @returns a lobbyBypassSettings
     */
    public get lobbyBypassSettings() {
        return this._lobbyBypassSettings;
    };
    /**
     * Gets the participants property value. The participants associated with the online meeting. This includes the organizer and the attendees.
     * @returns a meetingParticipants
     */
    public get participants() {
        return this._participants;
    };
    /**
     * Gets the startDateTime property value. The meeting start time in UTC.
     * @returns a Date
     */
    public get startDateTime() {
        return this._startDateTime;
    };
    /**
     * Gets the subject property value. The subject of the online meeting.
     * @returns a string
     */
    public get subject() {
        return this._subject;
    };
    /**
     * Gets the videoTeleconferenceId property value. The video teleconferencing ID. Read-only.
     * @returns a string
     */
    public get videoTeleconferenceId() {
        return this._videoTeleconferenceId;
    };
    /**
     * The deserialization information for the current model
     * @returns a Map<string, (item: T, node: ParseNode) => void>
     */
    public getFieldDeserializers<T>() : Map<string, (item: T, node: ParseNode) => void> {
        return new Map<string, (item: T, node: ParseNode) => void>([...super.getFieldDeserializers<T>(),
            ["allowAttendeeToEnableCamera", (o, n) => { (o as unknown as OnlineMeeting).allowAttendeeToEnableCamera = n.getBooleanValue(); }],
            ["allowAttendeeToEnableMic", (o, n) => { (o as unknown as OnlineMeeting).allowAttendeeToEnableMic = n.getBooleanValue(); }],
            ["allowedPresenters", (o, n) => { (o as unknown as OnlineMeeting).allowedPresenters = n.getEnumValue<OnlineMeetingPresenters>(OnlineMeetingPresenters); }],
            ["allowMeetingChat", (o, n) => { (o as unknown as OnlineMeeting).allowMeetingChat = n.getEnumValue<MeetingChatMode>(MeetingChatMode); }],
            ["allowTeamworkReactions", (o, n) => { (o as unknown as OnlineMeeting).allowTeamworkReactions = n.getBooleanValue(); }],
            ["audioConferencing", (o, n) => { (o as unknown as OnlineMeeting).audioConferencing = n.getObjectValue<AudioConferencing>(AudioConferencing); }],
            ["chatInfo", (o, n) => { (o as unknown as OnlineMeeting).chatInfo = n.getObjectValue<ChatInfo>(ChatInfo); }],
            ["creationDateTime", (o, n) => { (o as unknown as OnlineMeeting).creationDateTime = n.getDateValue(); }],
            ["endDateTime", (o, n) => { (o as unknown as OnlineMeeting).endDateTime = n.getDateValue(); }],
            ["externalId", (o, n) => { (o as unknown as OnlineMeeting).externalId = n.getStringValue(); }],
            ["isEntryExitAnnounced", (o, n) => { (o as unknown as OnlineMeeting).isEntryExitAnnounced = n.getBooleanValue(); }],
            ["joinInformation", (o, n) => { (o as unknown as OnlineMeeting).joinInformation = n.getObjectValue<ItemBody>(ItemBody); }],
            ["joinWebUrl", (o, n) => { (o as unknown as OnlineMeeting).joinWebUrl = n.getStringValue(); }],
            ["lobbyBypassSettings", (o, n) => { (o as unknown as OnlineMeeting).lobbyBypassSettings = n.getObjectValue<LobbyBypassSettings>(LobbyBypassSettings); }],
            ["participants", (o, n) => { (o as unknown as OnlineMeeting).participants = n.getObjectValue<MeetingParticipants>(MeetingParticipants); }],
            ["startDateTime", (o, n) => { (o as unknown as OnlineMeeting).startDateTime = n.getDateValue(); }],
            ["subject", (o, n) => { (o as unknown as OnlineMeeting).subject = n.getStringValue(); }],
            ["videoTeleconferenceId", (o, n) => { (o as unknown as OnlineMeeting).videoTeleconferenceId = n.getStringValue(); }],
        ]);
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        super.serialize(writer);
        writer.writeBooleanValue("allowAttendeeToEnableCamera", this.allowAttendeeToEnableCamera);
        writer.writeBooleanValue("allowAttendeeToEnableMic", this.allowAttendeeToEnableMic);
        writer.writeEnumValue<OnlineMeetingPresenters>("allowedPresenters", this.allowedPresenters);
        writer.writeEnumValue<MeetingChatMode>("allowMeetingChat", this.allowMeetingChat);
        writer.writeBooleanValue("allowTeamworkReactions", this.allowTeamworkReactions);
        writer.writeObjectValue<AudioConferencing>("audioConferencing", this.audioConferencing);
        writer.writeObjectValue<ChatInfo>("chatInfo", this.chatInfo);
        writer.writeDateValue("creationDateTime", this.creationDateTime);
        writer.writeDateValue("endDateTime", this.endDateTime);
        writer.writeStringValue("externalId", this.externalId);
        writer.writeBooleanValue("isEntryExitAnnounced", this.isEntryExitAnnounced);
        writer.writeObjectValue<ItemBody>("joinInformation", this.joinInformation);
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        writer.writeObjectValue<LobbyBypassSettings>("lobbyBypassSettings", this.lobbyBypassSettings);
        writer.writeObjectValue<MeetingParticipants>("participants", this.participants);
        writer.writeDateValue("startDateTime", this.startDateTime);
        writer.writeStringValue("subject", this.subject);
        writer.writeStringValue("videoTeleconferenceId", this.videoTeleconferenceId);
    };
    /**
     * Sets the allowAttendeeToEnableCamera property value. Indicates whether attendees can turn on their camera.
     * @param value Value to set for the allowAttendeeToEnableCamera property.
     */
    public set allowAttendeeToEnableCamera(value: boolean | undefined) {
        this._allowAttendeeToEnableCamera = value;
    };
    /**
     * Sets the allowAttendeeToEnableMic property value. Indicates whether attendees can turn on their microphone.
     * @param value Value to set for the allowAttendeeToEnableMic property.
     */
    public set allowAttendeeToEnableMic(value: boolean | undefined) {
        this._allowAttendeeToEnableMic = value;
    };
    /**
     * Sets the allowedPresenters property value. Specifies who can be a presenter in a meeting. Possible values are everyone, organization, roleIsPresenter, organizer, and unknownFutureValue.
     * @param value Value to set for the allowedPresenters property.
     */
    public set allowedPresenters(value: OnlineMeetingPresenters | undefined) {
        this._allowedPresenters = value;
    };
    /**
     * Sets the allowMeetingChat property value. Specifies the mode of meeting chat.
     * @param value Value to set for the allowMeetingChat property.
     */
    public set allowMeetingChat(value: MeetingChatMode | undefined) {
        this._allowMeetingChat = value;
    };
    /**
     * Sets the allowTeamworkReactions property value. Indicates if Teams reactions are enabled for the meeting.
     * @param value Value to set for the allowTeamworkReactions property.
     */
    public set allowTeamworkReactions(value: boolean | undefined) {
        this._allowTeamworkReactions = value;
    };
    /**
     * Sets the audioConferencing property value. The phone access (dial-in) information for an online meeting. Read-only.
     * @param value Value to set for the audioConferencing property.
     */
    public set audioConferencing(value: AudioConferencing | undefined) {
        this._audioConferencing = value;
    };
    /**
     * Sets the chatInfo property value. The chat information associated with this online meeting.
     * @param value Value to set for the chatInfo property.
     */
    public set chatInfo(value: ChatInfo | undefined) {
        this._chatInfo = value;
    };
    /**
     * Sets the creationDateTime property value. The meeting creation time in UTC. Read-only.
     * @param value Value to set for the creationDateTime property.
     */
    public set creationDateTime(value: Date | undefined) {
        this._creationDateTime = value;
    };
    /**
     * Sets the endDateTime property value. The meeting end time in UTC.
     * @param value Value to set for the endDateTime property.
     */
    public set endDateTime(value: Date | undefined) {
        this._endDateTime = value;
    };
    /**
     * Sets the externalId property value. The external ID. A custom ID. Optional.
     * @param value Value to set for the externalId property.
     */
    public set externalId(value: string | undefined) {
        this._externalId = value;
    };
    /**
     * Sets the isEntryExitAnnounced property value. Indicates whether to announce when callers join or leave.
     * @param value Value to set for the isEntryExitAnnounced property.
     */
    public set isEntryExitAnnounced(value: boolean | undefined) {
        this._isEntryExitAnnounced = value;
    };
    /**
     * Sets the joinInformation property value. The join information in the language and locale variant specified in 'Accept-Language' request HTTP header. Read-only
     * @param value Value to set for the joinInformation property.
     */
    public set joinInformation(value: ItemBody | undefined) {
        this._joinInformation = value;
    };
    /**
     * Sets the joinWebUrl property value. The join URL of the online meeting. Read-only.
     * @param value Value to set for the joinWebUrl property.
     */
    public set joinWebUrl(value: string | undefined) {
        this._joinWebUrl = value;
    };
    /**
     * Sets the lobbyBypassSettings property value. Specifies which participants can bypass the meeting lobby.
     * @param value Value to set for the lobbyBypassSettings property.
     */
    public set lobbyBypassSettings(value: LobbyBypassSettings | undefined) {
        this._lobbyBypassSettings = value;
    };
    /**
     * Sets the participants property value. The participants associated with the online meeting. This includes the organizer and the attendees.
     * @param value Value to set for the participants property.
     */
    public set participants(value: MeetingParticipants | undefined) {
        this._participants = value;
    };
    /**
     * Sets the startDateTime property value. The meeting start time in UTC.
     * @param value Value to set for the startDateTime property.
     */
    public set startDateTime(value: Date | undefined) {
        this._startDateTime = value;
    };
    /**
     * Sets the subject property value. The subject of the online meeting.
     * @param value Value to set for the subject property.
     */
    public set subject(value: string | undefined) {
        this._subject = value;
    };
    /**
     * Sets the videoTeleconferenceId property value. The video teleconferencing ID. Read-only.
     * @param value Value to set for the videoTeleconferenceId property.
     */
    public set videoTeleconferenceId(value: string | undefined) {
        this._videoTeleconferenceId = value;
    };
}
