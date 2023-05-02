import {FeedbackTokenSet} from './feedbackTokenSet';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoFeedbackTokenSet(feedbackTokenSet: FeedbackTokenSet | undefined = {} as FeedbackTokenSet) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { feedbackTokenSet.odataType = n.getStringValue(); },
    }
}
