import {MeetingTimeSuggestionsResultImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingTimeSuggestionsResultFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingTimeSuggestionsResultImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingTimeSuggestionsResultImpl();
}
