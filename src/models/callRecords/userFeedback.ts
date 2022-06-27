import {FeedbackTokenSet} from './feedbackTokenSet';
import {UserFeedbackRating} from './userFeedbackRating';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface UserFeedback extends Partial<AdditionalDataHolder>, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The rating provided by the user of this endpoint about the quality of this Session. Possible values are: notRated, bad, poor, fair, good, excellent, unknownFutureValue. */
    rating?: UserFeedbackRating | undefined;
    /** The feedback text provided by the user of this endpoint for the session. */
    text?: string | undefined;
    /** The set of feedback tokens provided by the user of this endpoint for the session. This is a set of Boolean properties. The property names should not be relied upon since they may change depending on what tokens are offered to the user. */
    tokens?: FeedbackTokenSet | undefined;
}
