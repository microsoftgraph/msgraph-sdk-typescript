import {JoinMeetingIdSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createJoinMeetingIdSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : JoinMeetingIdSettings {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new JoinMeetingIdSettings();
}
