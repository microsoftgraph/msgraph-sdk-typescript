import {deserializeIntoBroadcastMeetingCaptionSettings} from './deserializeIntoBroadcastMeetingCaptionSettings';
import {BroadcastMeetingCaptionSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBroadcastMeetingCaptionSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBroadcastMeetingCaptionSettings;
}
