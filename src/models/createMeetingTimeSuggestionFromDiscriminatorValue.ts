import {MeetingTimeSuggestionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingTimeSuggestionFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingTimeSuggestionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingTimeSuggestionImpl();
}
