import { type FeedbackTokenSet } from './feedbackTokenSet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeFeedbackTokenSet(writer: SerializationWriter, feedbackTokenSet: FeedbackTokenSet | undefined = {} as FeedbackTokenSet) : void {
        writer.writeStringValue("@odata.type", feedbackTokenSet.odataType);
        writer.writeAdditionalData(feedbackTokenSet.additionalData);
}
