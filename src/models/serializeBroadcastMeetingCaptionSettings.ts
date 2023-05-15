import {BroadcastMeetingCaptionSettings} from './broadcastMeetingCaptionSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeBroadcastMeetingCaptionSettings(writer: SerializationWriter, broadcastMeetingCaptionSettings: BroadcastMeetingCaptionSettings | undefined = {} as BroadcastMeetingCaptionSettings) : void {
        writer.writeBooleanValue("isCaptionEnabled", broadcastMeetingCaptionSettings.isCaptionEnabled);
        writer.writeStringValue("@odata.type", broadcastMeetingCaptionSettings.odataType);
        writer.writeStringValue("spokenLanguage", broadcastMeetingCaptionSettings.spokenLanguage);
        writer.writeCollectionOfPrimitiveValues<string>("translationLanguages", broadcastMeetingCaptionSettings.translationLanguages);
        writer.writeAdditionalData(broadcastMeetingCaptionSettings.additionalData);
}
