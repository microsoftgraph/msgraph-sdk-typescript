import {deserializeIntoJoinMeetingIdSettings} from './deserializeIntoJoinMeetingIdSettings';
import {JoinMeetingIdSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createJoinMeetingIdSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoJoinMeetingIdSettings;
}
