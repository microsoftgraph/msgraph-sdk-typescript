import { BroadcastMeetingAudience } from './broadcastMeetingAudience';
import { type BroadcastMeetingCaptionSettings } from './broadcastMeetingCaptionSettings';
import { type BroadcastMeetingSettings } from './broadcastMeetingSettings';
import { createBroadcastMeetingCaptionSettingsFromDiscriminatorValue } from './createBroadcastMeetingCaptionSettingsFromDiscriminatorValue';
import { serializeBroadcastMeetingCaptionSettings } from './serializeBroadcastMeetingCaptionSettings';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoBroadcastMeetingSettings(broadcastMeetingSettings: BroadcastMeetingSettings | undefined = {} as BroadcastMeetingSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "allowedAudience": n => { broadcastMeetingSettings.allowedAudience = n.getEnumValue<BroadcastMeetingAudience>(BroadcastMeetingAudience); },
        "captions": n => { broadcastMeetingSettings.captions = n.getObjectValue<BroadcastMeetingCaptionSettings>(createBroadcastMeetingCaptionSettingsFromDiscriminatorValue); },
        "isAttendeeReportEnabled": n => { broadcastMeetingSettings.isAttendeeReportEnabled = n.getBooleanValue(); },
        "isQuestionAndAnswerEnabled": n => { broadcastMeetingSettings.isQuestionAndAnswerEnabled = n.getBooleanValue(); },
        "isRecordingEnabled": n => { broadcastMeetingSettings.isRecordingEnabled = n.getBooleanValue(); },
        "isVideoOnDemandEnabled": n => { broadcastMeetingSettings.isVideoOnDemandEnabled = n.getBooleanValue(); },
        "@odata.type": n => { broadcastMeetingSettings.odataType = n.getStringValue(); },
    }
}
