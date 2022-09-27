import {MeetingTimeSuggestionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMeetingTimeSuggestionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MeetingTimeSuggestionCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MeetingTimeSuggestionCollectionResponse();
}
