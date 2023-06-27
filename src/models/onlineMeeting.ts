import {AudioConferencing} from './audioConferencing';
import {BroadcastMeetingSettings} from './broadcastMeetingSettings';
import {ChatInfo} from './chatInfo';
import {Entity} from './entity';
import {ItemBody} from './itemBody';
import {JoinMeetingIdSettings} from './joinMeetingIdSettings';
import {LobbyBypassSettings} from './lobbyBypassSettings';
import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {MeetingChatMode} from './meetingChatMode';
import {MeetingParticipants} from './meetingParticipants';
import {OnlineMeetingPresenters} from './onlineMeetingPresenters';
import {WatermarkProtectionValues} from './watermarkProtectionValues';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnlineMeeting extends Entity, Parsable {
    /**
     * Indicates whether attendees can turn on their camera.
     */
    allowAttendeeToEnableCamera?: boolean | undefined;
    /**
     * Indicates whether attendees can turn on their microphone.
     */
    allowAttendeeToEnableMic?: boolean | undefined;
    /**
     * Specifies who can be a presenter in a meeting. Possible values are listed in the following table.
     */
    allowedPresenters?: OnlineMeetingPresenters | undefined;
    /**
     * Specifies the mode of meeting chat.
     */
    allowMeetingChat?: MeetingChatMode | undefined;
    /**
     * Indicates whether Teams reactions are enabled for the meeting.
     */
    allowTeamworkReactions?: boolean | undefined;
    /**
     * The attendance reports of an online meeting. Read-only.
     */
    attendanceReports?: MeetingAttendanceReport[] | undefined;
    /**
     * The content stream of the attendee report of a Microsoft Teams live event. Read-only.
     */
    attendeeReport?: string | undefined;
    /**
     * The phone access (dial-in) information for an online meeting. Read-only.
     */
    audioConferencing?: AudioConferencing | undefined;
    /**
     * Settings related to a live event.
     */
    broadcastSettings?: BroadcastMeetingSettings | undefined;
    /**
     * The chat information associated with this online meeting.
     */
    chatInfo?: ChatInfo | undefined;
    /**
     * The meeting creation time in UTC. Read-only.
     */
    creationDateTime?: Date | undefined;
    /**
     * The meeting end time in UTC.
     */
    endDateTime?: Date | undefined;
    /**
     * The externalId property
     */
    externalId?: string | undefined;
    /**
     * Indicates if this is a Teams live event.
     */
    isBroadcast?: boolean | undefined;
    /**
     * Indicates whether to announce when callers join or leave.
     */
    isEntryExitAnnounced?: boolean | undefined;
    /**
     * The join information in the language and locale variant specified in the Accept-Language request HTTP header. Read-only.
     */
    joinInformation?: ItemBody | undefined;
    /**
     * Specifies the joinMeetingId, the meeting passcode, and the requirement for the passcode. Once an onlineMeeting is created, the joinMeetingIdSettings cannot be modified. To make any changes to this property, the meeting needs to be canceled and a new one needs to be created.
     */
    joinMeetingIdSettings?: JoinMeetingIdSettings | undefined;
    /**
     * The join URL of the online meeting. Read-only.
     */
    joinWebUrl?: string | undefined;
    /**
     * Specifies which participants can bypass the meeting   lobby.
     */
    lobbyBypassSettings?: LobbyBypassSettings | undefined;
    /**
     * The participants associated with the online meeting.  This includes the organizer and the attendees.
     */
    participants?: MeetingParticipants | undefined;
    /**
     * Indicates whether to record the meeting automatically.
     */
    recordAutomatically?: boolean | undefined;
    /**
     * The meeting start time in UTC.
     */
    startDateTime?: Date | undefined;
    /**
     * The subject of the online meeting.
     */
    subject?: string | undefined;
    /**
     * The video teleconferencing ID. Read-only.
     */
    videoTeleconferenceId?: string | undefined;
    /**
     * Specifies whether a watermark should be applied to a content type by the client application.
     */
    watermarkProtection?: WatermarkProtectionValues | undefined;
}
