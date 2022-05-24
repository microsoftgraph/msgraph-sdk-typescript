import {BroadcastMeetingAudience} from './broadcastMeetingAudience';
import {BroadcastMeetingSettings} from './broadcastMeetingSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export class BroadcastMeetingSettingsImpl implements AdditionalDataHolder, BroadcastMeetingSettings, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    public additionalData: Record<string, unknown>;
    /** Defines who can join the Teams live event. Possible values are listed in the following table. */
    public allowedAudience?: BroadcastMeetingAudience | undefined;
    /** Indicates whether attendee report is enabled for this Teams live event. Default value is false. */
    public isAttendeeReportEnabled?: boolean | undefined;
    /** Indicates whether Q&A is enabled for this Teams live event. Default value is false. */
    public isQuestionAndAnswerEnabled?: boolean | undefined;
    /** Indicates whether recording is enabled for this Teams live event. Default value is false. */
    public isRecordingEnabled?: boolean | undefined;
    /** Indicates whether video on demand is enabled for this Teams live event. Default value is false. */
    public isVideoOnDemandEnabled?: boolean | undefined;
    /**
     * Instantiates a new broadcastMeetingSettings and sets the default values.
     * @param broadcastMeetingSettingsParameterValue 
     */
    public constructor(broadcastMeetingSettingsParameterValue?: BroadcastMeetingSettings | undefined) {
        this.additionalData = broadcastMeetingSettingsParameterValue?.additionalData ? broadcastMeetingSettingsParameterValue?.additionalData! : {}
        this.allowedAudience = broadcastMeetingSettingsParameterValue?.allowedAudience ;
        this.isAttendeeReportEnabled = broadcastMeetingSettingsParameterValue?.isAttendeeReportEnabled ;
        this.isQuestionAndAnswerEnabled = broadcastMeetingSettingsParameterValue?.isQuestionAndAnswerEnabled ;
        this.isRecordingEnabled = broadcastMeetingSettingsParameterValue?.isRecordingEnabled ;
        this.isVideoOnDemandEnabled = broadcastMeetingSettingsParameterValue?.isVideoOnDemandEnabled ;
    };
    /**
     * The deserialization information for the current model
     * @returns a Record<string, (node: ParseNode) => void>
     */
    public getFieldDeserializers() : Record<string, (node: ParseNode) => void> {
        return {
            "allowedAudience": n => { this.allowedAudience = n.getEnumValue<BroadcastMeetingAudience>(BroadcastMeetingAudience); },
            "isAttendeeReportEnabled": n => { this.isAttendeeReportEnabled = n.getBooleanValue(); },
            "isQuestionAndAnswerEnabled": n => { this.isQuestionAndAnswerEnabled = n.getBooleanValue(); },
            "isRecordingEnabled": n => { this.isRecordingEnabled = n.getBooleanValue(); },
            "isVideoOnDemandEnabled": n => { this.isVideoOnDemandEnabled = n.getBooleanValue(); },
        };
    };
    /**
     * Serializes information the current object
     * @param writer Serialization writer to use to serialize this model
     */
    public serialize(writer: SerializationWriter) : void {
        if(!writer) throw new Error("writer cannot be undefined");
        if(this.allowedAudience){
        writer.writeEnumValue<BroadcastMeetingAudience>("allowedAudience", this.allowedAudience);
        }
        if(this.isAttendeeReportEnabled){
        writer.writeBooleanValue("isAttendeeReportEnabled", this.isAttendeeReportEnabled);
        }
        if(this.isQuestionAndAnswerEnabled){
        writer.writeBooleanValue("isQuestionAndAnswerEnabled", this.isQuestionAndAnswerEnabled);
        }
        if(this.isRecordingEnabled){
        writer.writeBooleanValue("isRecordingEnabled", this.isRecordingEnabled);
        }
        if(this.isVideoOnDemandEnabled){
        writer.writeBooleanValue("isVideoOnDemandEnabled", this.isVideoOnDemandEnabled);
        }
        writer.writeAdditionalData(this.additionalData);
    };
}
