import {MeetingTimeSuggestion} from './meetingTimeSuggestion';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingTimeSuggestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingTimeSuggestion {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingTimeSuggestion();
}
