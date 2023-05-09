import {deserializeIntoMeetingTimeSuggestionsResult} from './deserializeIntoMeetingTimeSuggestionsResult';
import {MeetingTimeSuggestionsResult} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingTimeSuggestionsResultFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingTimeSuggestionsResult;
}
