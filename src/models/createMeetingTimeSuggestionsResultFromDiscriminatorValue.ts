import { deserializeIntoMeetingTimeSuggestionsResult } from './deserializeIntoMeetingTimeSuggestionsResult';
import { type MeetingTimeSuggestionsResult } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMeetingTimeSuggestionsResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingTimeSuggestionsResult;
}
