import {AudioConferencing} from './audioConferencing';
import {BroadcastMeetingSettings} from './broadcastMeetingSettings';
import {ChatInfo} from './chatInfo';
import {createAudioConferencingFromDiscriminatorValue} from './createAudioConferencingFromDiscriminatorValue';
import {createBroadcastMeetingSettingsFromDiscriminatorValue} from './createBroadcastMeetingSettingsFromDiscriminatorValue';
import {createChatInfoFromDiscriminatorValue} from './createChatInfoFromDiscriminatorValue';
import {createItemBodyFromDiscriminatorValue} from './createItemBodyFromDiscriminatorValue';
import {createJoinMeetingIdSettingsFromDiscriminatorValue} from './createJoinMeetingIdSettingsFromDiscriminatorValue';
import {createLobbyBypassSettingsFromDiscriminatorValue} from './createLobbyBypassSettingsFromDiscriminatorValue';
import {createMeetingAttendanceReportFromDiscriminatorValue} from './createMeetingAttendanceReportFromDiscriminatorValue';
import {createMeetingParticipantsFromDiscriminatorValue} from './createMeetingParticipantsFromDiscriminatorValue';
import {createWatermarkProtectionValuesFromDiscriminatorValue} from './createWatermarkProtectionValuesFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {ItemBody} from './itemBody';
import {JoinMeetingIdSettings} from './joinMeetingIdSettings';
import {LobbyBypassSettings} from './lobbyBypassSettings';
import {MeetingAttendanceReport} from './meetingAttendanceReport';
import {MeetingChatMode} from './meetingChatMode';
import {MeetingParticipants} from './meetingParticipants';
import {OnlineMeeting} from './onlineMeeting';
import {OnlineMeetingPresenters} from './onlineMeetingPresenters';
import {serializeAudioConferencing} from './serializeAudioConferencing';
import {serializeBroadcastMeetingSettings} from './serializeBroadcastMeetingSettings';
import {serializeChatInfo} from './serializeChatInfo';
import {serializeItemBody} from './serializeItemBody';
import {serializeJoinMeetingIdSettings} from './serializeJoinMeetingIdSettings';
import {serializeLobbyBypassSettings} from './serializeLobbyBypassSettings';
import {serializeMeetingAttendanceReport} from './serializeMeetingAttendanceReport';
import {serializeMeetingParticipants} from './serializeMeetingParticipants';
import {serializeWatermarkProtectionValues} from './serializeWatermarkProtectionValues';
import {WatermarkProtectionValues} from './watermarkProtectionValues';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoOnlineMeeting(onlineMeeting: OnlineMeeting | undefined = {} as OnlineMeeting) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(onlineMeeting),
        "allowAttendeeToEnableCamera": n => { onlineMeeting.allowAttendeeToEnableCamera = n.getBooleanValue(); },
        "allowAttendeeToEnableMic": n => { onlineMeeting.allowAttendeeToEnableMic = n.getBooleanValue(); },
        "allowedPresenters": n => { onlineMeeting.allowedPresenters = n.getEnumValue<OnlineMeetingPresenters>(OnlineMeetingPresenters); },
        "allowMeetingChat": n => { onlineMeeting.allowMeetingChat = n.getEnumValue<MeetingChatMode>(MeetingChatMode); },
        "allowTeamworkReactions": n => { onlineMeeting.allowTeamworkReactions = n.getBooleanValue(); },
        "attendanceReports": n => { onlineMeeting.attendanceReports = n.getCollectionOfObjectValues<MeetingAttendanceReport>(createMeetingAttendanceReportFromDiscriminatorValue); },
        "attendeeReport": n => { onlineMeeting.attendeeReport = n.getStringValue(); },
        "audioConferencing": n => { onlineMeeting.audioConferencing = n.getObjectValue<AudioConferencing>(createAudioConferencingFromDiscriminatorValue); },
        "broadcastSettings": n => { onlineMeeting.broadcastSettings = n.getObjectValue<BroadcastMeetingSettings>(createBroadcastMeetingSettingsFromDiscriminatorValue); },
        "chatInfo": n => { onlineMeeting.chatInfo = n.getObjectValue<ChatInfo>(createChatInfoFromDiscriminatorValue); },
        "creationDateTime": n => { onlineMeeting.creationDateTime = n.getDateValue(); },
        "endDateTime": n => { onlineMeeting.endDateTime = n.getDateValue(); },
        "externalId": n => { onlineMeeting.externalId = n.getStringValue(); },
        "isBroadcast": n => { onlineMeeting.isBroadcast = n.getBooleanValue(); },
        "isEntryExitAnnounced": n => { onlineMeeting.isEntryExitAnnounced = n.getBooleanValue(); },
        "joinInformation": n => { onlineMeeting.joinInformation = n.getObjectValue<ItemBody>(createItemBodyFromDiscriminatorValue); },
        "joinMeetingIdSettings": n => { onlineMeeting.joinMeetingIdSettings = n.getObjectValue<JoinMeetingIdSettings>(createJoinMeetingIdSettingsFromDiscriminatorValue); },
        "joinWebUrl": n => { onlineMeeting.joinWebUrl = n.getStringValue(); },
        "lobbyBypassSettings": n => { onlineMeeting.lobbyBypassSettings = n.getObjectValue<LobbyBypassSettings>(createLobbyBypassSettingsFromDiscriminatorValue); },
        "participants": n => { onlineMeeting.participants = n.getObjectValue<MeetingParticipants>(createMeetingParticipantsFromDiscriminatorValue); },
        "recordAutomatically": n => { onlineMeeting.recordAutomatically = n.getBooleanValue(); },
        "startDateTime": n => { onlineMeeting.startDateTime = n.getDateValue(); },
        "subject": n => { onlineMeeting.subject = n.getStringValue(); },
        "videoTeleconferenceId": n => { onlineMeeting.videoTeleconferenceId = n.getStringValue(); },
        "watermarkProtection": n => { onlineMeeting.watermarkProtection = n.getObjectValue<WatermarkProtectionValues>(createWatermarkProtectionValuesFromDiscriminatorValue); },
    }
}
