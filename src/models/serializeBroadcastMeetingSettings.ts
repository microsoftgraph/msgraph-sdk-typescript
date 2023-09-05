import { BroadcastMeetingAudience } from './broadcastMeetingAudience';
import { type BroadcastMeetingCaptionSettings } from './broadcastMeetingCaptionSettings';
import { type BroadcastMeetingSettings } from './broadcastMeetingSettings';
import { serializeBroadcastMeetingCaptionSettings } from './serializeBroadcastMeetingCaptionSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeBroadcastMeetingSettings(writer: SerializationWriter, broadcastMeetingSettings: BroadcastMeetingSettings | undefined = {} as BroadcastMeetingSettings) : void {
        writer.writeEnumValue<BroadcastMeetingAudience>("allowedAudience", broadcastMeetingSettings.allowedAudience);
        writer.writeObjectValue<BroadcastMeetingCaptionSettings>("captions", broadcastMeetingSettings.captions, serializeBroadcastMeetingCaptionSettings);
        writer.writeBooleanValue("isAttendeeReportEnabled", broadcastMeetingSettings.isAttendeeReportEnabled);
        writer.writeBooleanValue("isQuestionAndAnswerEnabled", broadcastMeetingSettings.isQuestionAndAnswerEnabled);
        writer.writeBooleanValue("isRecordingEnabled", broadcastMeetingSettings.isRecordingEnabled);
        writer.writeBooleanValue("isVideoOnDemandEnabled", broadcastMeetingSettings.isVideoOnDemandEnabled);
        writer.writeStringValue("@odata.type", broadcastMeetingSettings.odataType);
        writer.writeAdditionalData(broadcastMeetingSettings.additionalData);
}
