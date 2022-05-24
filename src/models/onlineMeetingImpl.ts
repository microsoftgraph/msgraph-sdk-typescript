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
export class OnlineMeetingImpl extends EntityImpl implements OnlineMeeting, Parsable {
    /** Indicates whether attendees can turn on their camera. */
    public allowAttendeeToEnableCamera?: boolean | undefined;
    /** Indicates whether attendees can turn on their microphone. */
    public allowAttendeeToEnableMic?: boolean | undefined;
    /** Specifies who can be a presenter in a meeting. */
    public allowedPresenters?: OnlineMeetingPresenters | undefined;
    /** Specifies the mode of meeting chat. */
    public allowMeetingChat?: MeetingChatMode | undefined;
    /** Indicates if Teams reactions are enabled for the meeting. */
    public allowTeamworkReactions?: boolean | undefined;
    /** The attendance reports of an online meeting. Read-only. */
    public attendanceReports?: MeetingAttendanceReport[] | undefined;
    /** The content stream of the attendee report of a Teams live event. Read-only. */
    public attendeeReport?: string | undefined;
    /** The phone access (dial-in) information for an online meeting. Read-only. */
    public audioConferencing?: AudioConferencing | undefined;
    /** Settings related to a live event. */
    public broadcastSettings?: BroadcastMeetingSettings | undefined;
    /** The chat information associated with this online meeting. */
    public chatInfo?: ChatInfo | undefined;
    /** The meeting creation time in UTC. Read-only. */
    public creationDateTime?: Date | undefined;
    /** The meeting end time in UTC. */
    public endDateTime?: Date | undefined;
    /** The external ID. A custom ID. Optional. */
    public externalId?: string | undefined;
    /** Indicates whether this is a Teams live event. */
    public isBroadcast?: boolean | undefined;
    /** Indicates whether to announce when callers join or leave. */
    public isEntryExitAnnounced?: boolean | undefined;
    /** The join information in the language and locale variant specified in 'Accept-Language' request HTTP header. Read-only. */
    public joinInformation?: ItemBody | undefined;
    /** The join URL of the online meeting. Read-only. */
    public joinWebUrl?: string | undefined;
    /** Specifies which participants can bypass the meeting lobby. */
    public lobbyBypassSettings?: LobbyBypassSettings | undefined;
    /** The participants associated with the online meeting. This includes the organizer and the attendees. */
    public participants?: MeetingParticipants | undefined;
    /** Indicates whether to record the meeting automatically. */
    public recordAutomatically?: boolean | undefined;
    /** The meeting start time in UTC. */
    public startDateTime?: Date | undefined;
    /** The subject of the online meeting. */
    public subject?: string | undefined;
    /** The video teleconferencing ID. Read-only. */
    public videoTeleconferenceId?: string | undefined;
    /**
     * Instantiates a new onlineMeeting and sets the default values.
     * @param onlineMeetingParameterValue 
     */
    public constructor(onlineMeetingParameterValue?: OnlineMeeting | undefined) {
        super();
        this.allowAttendeeToEnableCamera = onlineMeetingParameterValue?.allowAttendeeToEnableCamera ;
        this.allowAttendeeToEnableMic = onlineMeetingParameterValue?.allowAttendeeToEnableMic ;
        this.allowedPresenters = onlineMeetingParameterValue?.allowedPresenters ;
        this.allowMeetingChat = onlineMeetingParameterValue?.allowMeetingChat ;
        this.allowTeamworkReactions = onlineMeetingParameterValue?.allowTeamworkReactions ;
        this.attendanceReports = onlineMeetingParameterValue?.attendanceReports ;
        this.attendeeReport = onlineMeetingParameterValue?.attendeeReport ;
        this.audioConferencing = onlineMeetingParameterValue?.audioConferencing ;
        this.broadcastSettings = onlineMeetingParameterValue?.broadcastSettings ;
        this.chatInfo = onlineMeetingParameterValue?.chatInfo ;
        this.creationDateTime = onlineMeetingParameterValue?.creationDateTime ;
        this.endDateTime = onlineMeetingParameterValue?.endDateTime ;
        this.externalId = onlineMeetingParameterValue?.externalId ;
        this.isBroadcast = onlineMeetingParameterValue?.isBroadcast ;
        this.isEntryExitAnnounced = onlineMeetingParameterValue?.isEntryExitAnnounced ;
        this.joinInformation = onlineMeetingParameterValue?.joinInformation ;
        this.joinWebUrl = onlineMeetingParameterValue?.joinWebUrl ;
        this.lobbyBypassSettings = onlineMeetingParameterValue?.lobbyBypassSettings ;
        this.participants = onlineMeetingParameterValue?.participants ;
        this.recordAutomatically = onlineMeetingParameterValue?.recordAutomatically ;
        this.startDateTime = onlineMeetingParameterValue?.startDateTime ;
        this.subject = onlineMeetingParameterValue?.subject ;
        this.videoTeleconferenceId = onlineMeetingParameterValue?.videoTeleconferenceId ;
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
        if(this.attendanceReports && this.attendanceReports.length != 0){        const attendanceReportsArrValue: MeetingAttendanceReportImpl[] = []; this.attendanceReports?.forEach(element => {attendanceReportsArrValue.push(new MeetingAttendanceReportImpl(element));});
        writer.writeCollectionOfObjectValues<MeetingAttendanceReportImpl>("attendanceReports", attendanceReportsArrValue);
        }
        if(this.attendeeReport){
        writer.writeStringValue("attendeeReport", this.attendeeReport);
        }
        if(this.audioConferencing){
        writer.writeObjectValue<AudioConferencingImpl>("audioConferencing", new AudioConferencingImpl(this.audioConferencing));
        }
        if(this.broadcastSettings){
        writer.writeObjectValue<BroadcastMeetingSettingsImpl>("broadcastSettings", new BroadcastMeetingSettingsImpl(this.broadcastSettings));
        }
        if(this.chatInfo){
        writer.writeObjectValue<ChatInfoImpl>("chatInfo", new ChatInfoImpl(this.chatInfo));
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
        writer.writeObjectValue<ItemBodyImpl>("joinInformation", new ItemBodyImpl(this.joinInformation));
        }
        if(this.joinWebUrl){
        writer.writeStringValue("joinWebUrl", this.joinWebUrl);
        }
        if(this.lobbyBypassSettings){
        writer.writeObjectValue<LobbyBypassSettingsImpl>("lobbyBypassSettings", new LobbyBypassSettingsImpl(this.lobbyBypassSettings));
        }
        if(this.participants){
        writer.writeObjectValue<MeetingParticipantsImpl>("participants", new MeetingParticipantsImpl(this.participants));
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
}
