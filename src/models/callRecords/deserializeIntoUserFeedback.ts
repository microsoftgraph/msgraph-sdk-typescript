import { createFeedbackTokenSetFromDiscriminatorValue } from './createFeedbackTokenSetFromDiscriminatorValue';
import { type FeedbackTokenSet } from './feedbackTokenSet';
import { serializeFeedbackTokenSet } from './serializeFeedbackTokenSet';
import { type UserFeedback } from './userFeedback';
import { UserFeedbackRating } from './userFeedbackRating';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFeedback(userFeedback: UserFeedback | undefined = {} as UserFeedback) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userFeedback.odataType = n.getStringValue(); },
        "rating": n => { userFeedback.rating = n.getEnumValue<UserFeedbackRating>(UserFeedbackRating); },
        "text": n => { userFeedback.text = n.getStringValue(); },
        "tokens": n => { userFeedback.tokens = n.getObjectValue<FeedbackTokenSet>(createFeedbackTokenSetFromDiscriminatorValue); },
    }
}
