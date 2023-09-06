import { type FeedbackTokenSet } from './feedbackTokenSet';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoFeedbackTokenSet(feedbackTokenSet: FeedbackTokenSet | undefined = {} as FeedbackTokenSet) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { feedbackTokenSet.odataType = n.getStringValue(); },
    }
}
