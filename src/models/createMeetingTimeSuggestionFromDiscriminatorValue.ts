import {deserializeIntoMeetingTimeSuggestion} from './deserializeIntoMeetingTimeSuggestion';
import {MeetingTimeSuggestion} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingTimeSuggestionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingTimeSuggestion;
}
