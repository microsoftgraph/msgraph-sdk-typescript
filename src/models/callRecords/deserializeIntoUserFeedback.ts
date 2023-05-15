import {createFeedbackTokenSetFromDiscriminatorValue} from './createFeedbackTokenSetFromDiscriminatorValue';
import {FeedbackTokenSet} from './feedbackTokenSet';
import {serializeFeedbackTokenSet} from './serializeFeedbackTokenSet';
import {UserFeedback} from './userFeedback';
import {UserFeedbackRating} from './userFeedbackRating';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserFeedback(userFeedback: UserFeedback | undefined = {} as UserFeedback) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { userFeedback.odataType = n.getStringValue(); },
        "rating": n => { userFeedback.rating = n.getEnumValue<UserFeedbackRating>(UserFeedbackRating); },
        "text": n => { userFeedback.text = n.getStringValue(); },
        "tokens": n => { userFeedback.tokens = n.getObjectValue<FeedbackTokenSet>(createFeedbackTokenSetFromDiscriminatorValue); },
    }
}
