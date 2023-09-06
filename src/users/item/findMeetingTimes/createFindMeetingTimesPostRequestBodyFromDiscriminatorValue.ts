import { deserializeIntoFindMeetingTimesPostRequestBody } from './deserializeIntoFindMeetingTimesPostRequestBody';
import { type FindMeetingTimesPostRequestBody } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createFindMeetingTimesPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoFindMeetingTimesPostRequestBody;
}
