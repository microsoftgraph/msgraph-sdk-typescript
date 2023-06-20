import {FeedbackTokenSet} from './feedbackTokenSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeFeedbackTokenSet(feedbackTokenSet: FeedbackTokenSet | undefined = {} as FeedbackTokenSet, writer: SerializationWriter) : void {
        writer.writeStringValue("@odata.type", feedbackTokenSet.odataType);
        writer.writeAdditionalData(feedbackTokenSet.additionalData);
}
