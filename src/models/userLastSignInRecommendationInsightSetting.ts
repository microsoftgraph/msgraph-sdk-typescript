import {AccessReviewRecommendationInsightSetting} from './accessReviewRecommendationInsightSetting';
import {UserSignInRecommendationScope} from './userSignInRecommendationScope';
import {Duration, Parsable} from '@microsoft/kiota-abstractions';

export interface UserLastSignInRecommendationInsightSetting extends AccessReviewRecommendationInsightSetting, Parsable {
    /**
     * The recommendationLookBackDuration property
     */
    recommendationLookBackDuration?: Duration | undefined;
    /**
     * The signInScope property
     */
    signInScope?: UserSignInRecommendationScope | undefined;
}
