import {MeetingTimeSuggestion} from './meetingTimeSuggestion';
import {MeetingTimeSuggestionsResult} from './meetingTimeSuggestionsResult';
import {serializeMeetingTimeSuggestion} from './serializeMeetingTimeSuggestion';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeMeetingTimeSuggestionsResult(writer: SerializationWriter, meetingTimeSuggestionsResult: MeetingTimeSuggestionsResult | undefined = {} as MeetingTimeSuggestionsResult) : void {
        writer.writeStringValue("emptySuggestionsReason", meetingTimeSuggestionsResult.emptySuggestionsReason);
        writer.writeCollectionOfObjectValues<MeetingTimeSuggestion>("meetingTimeSuggestions", meetingTimeSuggestionsResult.meetingTimeSuggestions, serializeMeetingTimeSuggestion);
        writer.writeStringValue("@odata.type", meetingTimeSuggestionsResult.odataType);
        writer.writeAdditionalData(meetingTimeSuggestionsResult.additionalData);
}
