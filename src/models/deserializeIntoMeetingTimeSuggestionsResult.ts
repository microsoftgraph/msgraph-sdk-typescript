import {createMeetingTimeSuggestionFromDiscriminatorValue} from './createMeetingTimeSuggestionFromDiscriminatorValue';
import {MeetingTimeSuggestion} from './meetingTimeSuggestion';
import {MeetingTimeSuggestionsResult} from './meetingTimeSuggestionsResult';
import {serializeMeetingTimeSuggestion} from './serializeMeetingTimeSuggestion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoMeetingTimeSuggestionsResult(meetingTimeSuggestionsResult: MeetingTimeSuggestionsResult | undefined = {} as MeetingTimeSuggestionsResult) : Record<string, (node: ParseNode) => void> {
    return {
        "emptySuggestionsReason": n => { meetingTimeSuggestionsResult.emptySuggestionsReason = n.getStringValue(); },
        "meetingTimeSuggestions": n => { meetingTimeSuggestionsResult.meetingTimeSuggestions = n.getCollectionOfObjectValues<MeetingTimeSuggestion>(createMeetingTimeSuggestionFromDiscriminatorValue); },
        "@odata.type": n => { meetingTimeSuggestionsResult.odataType = n.getStringValue(); },
    }
}
