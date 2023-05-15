import {deserializeIntoFindMeetingTimesPostRequestBody} from './deserializeIntoFindMeetingTimesPostRequestBody';
import {FindMeetingTimesPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFindMeetingTimesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFindMeetingTimesPostRequestBody;
}
