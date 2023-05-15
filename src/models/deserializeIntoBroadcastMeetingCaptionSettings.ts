import {BroadcastMeetingCaptionSettings} from './broadcastMeetingCaptionSettings';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoBroadcastMeetingCaptionSettings(broadcastMeetingCaptionSettings: BroadcastMeetingCaptionSettings | undefined = {} as BroadcastMeetingCaptionSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "isCaptionEnabled": n => { broadcastMeetingCaptionSettings.isCaptionEnabled = n.getBooleanValue(); },
        "@odata.type": n => { broadcastMeetingCaptionSettings.odataType = n.getStringValue(); },
        "spokenLanguage": n => { broadcastMeetingCaptionSettings.spokenLanguage = n.getStringValue(); },
        "translationLanguages": n => { broadcastMeetingCaptionSettings.translationLanguages = n.getCollectionOfPrimitiveValues<string>(); },
    }
}
