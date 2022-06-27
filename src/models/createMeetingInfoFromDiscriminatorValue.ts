import {MeetingInfoImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingInfoFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingInfoImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingInfoImpl();
}
