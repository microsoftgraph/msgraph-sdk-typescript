import {FindMeetingTimesPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFindMeetingTimesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FindMeetingTimesPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FindMeetingTimesPostRequestBodyImpl();
}
