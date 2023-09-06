import { deserializeIntoMeetingTimeSuggestion } from './deserializeIntoMeetingTimeSuggestion';
import { type MeetingTimeSuggestion } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createMeetingTimeSuggestionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoMeetingTimeSuggestion;
}
