import {FindMeetingTimesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFindMeetingTimesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : FindMeetingTimesPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FindMeetingTimesPostRequestBody();
}
