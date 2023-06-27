import {BroadcastMeetingAudience} from './broadcastMeetingAudience';
import {BroadcastMeetingCaptionSettings} from './broadcastMeetingCaptionSettings';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface BroadcastMeetingSettings extends AdditionalDataHolder, Parsable {
    /**
     * Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well.
     */
    additionalData?: Record<string, unknown>;
    /**
     * Defines who can join the Teams live event. Possible values are listed in the following table.
     */
    allowedAudience?: BroadcastMeetingAudience | undefined;
    /**
     * Caption settings of a Teams live event.
     */
    captions?: BroadcastMeetingCaptionSettings | undefined;
    /**
     * Indicates whether attendee report is enabled for this Teams live event. Default value is false.
     */
    isAttendeeReportEnabled?: boolean | undefined;
    /**
     * Indicates whether Q&A is enabled for this Teams live event. Default value is false.
     */
    isQuestionAndAnswerEnabled?: boolean | undefined;
    /**
     * Indicates whether recording is enabled for this Teams live event. Default value is false.
     */
    isRecordingEnabled?: boolean | undefined;
    /**
     * Indicates whether video on demand is enabled for this Teams live event. Default value is false.
     */
    isVideoOnDemandEnabled?: boolean | undefined;
    /**
     * The OdataType property
     */
    odataType?: string | undefined;
}
