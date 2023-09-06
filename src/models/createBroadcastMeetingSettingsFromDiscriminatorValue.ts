import { deserializeIntoBroadcastMeetingSettings } from './deserializeIntoBroadcastMeetingSettings';
import { type BroadcastMeetingSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createBroadcastMeetingSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBroadcastMeetingSettings;
}
