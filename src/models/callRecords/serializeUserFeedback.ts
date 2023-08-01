import type {FeedbackTokenSet} from './feedbackTokenSet';
import {serializeFeedbackTokenSet} from './serializeFeedbackTokenSet';
import type {UserFeedback} from './userFeedback';
import {UserFeedbackRating} from './userFeedbackRating';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserFeedback(writer: SerializationWriter, userFeedback: UserFeedback | undefined = {} as UserFeedback) : void {
        writer.writeStringValue("@odata.type", userFeedback.odataType);
        writer.writeEnumValue<UserFeedbackRating>("rating", userFeedback.rating);
        writer.writeStringValue("text", userFeedback.text);
        writer.writeObjectValue<FeedbackTokenSet>("tokens", userFeedback.tokens, serializeFeedbackTokenSet);
        writer.writeAdditionalData(userFeedback.additionalData);
}
