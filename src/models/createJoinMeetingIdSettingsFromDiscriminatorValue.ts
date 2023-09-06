import { deserializeIntoJoinMeetingIdSettings } from './deserializeIntoJoinMeetingIdSettings';
import { type JoinMeetingIdSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createJoinMeetingIdSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoJoinMeetingIdSettings;
}
