import {FeedbackTokenSet} from './feedbackTokenSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFeedbackTokenSet(writer: SerializationWriter, feedbackTokenSet: FeedbackTokenSet | undefined = {} as FeedbackTokenSet) : void {
        writer.writeStringValue("@odata.type", feedbackTokenSet.odataType);
        writer.writeAdditionalData(feedbackTokenSet.additionalData);
}
