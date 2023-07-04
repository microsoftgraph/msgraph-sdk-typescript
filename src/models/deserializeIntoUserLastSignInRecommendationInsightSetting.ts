import {deserializeIntoAccessReviewRecommendationInsightSetting} from './deserializeIntoAccessReviewRecommendationInsightSetting';
import {UserLastSignInRecommendationInsightSetting} from './userLastSignInRecommendationInsightSetting';
import {UserSignInRecommendationScope} from './userSignInRecommendationScope';
import {Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserLastSignInRecommendationInsightSetting(userLastSignInRecommendationInsightSetting: UserLastSignInRecommendationInsightSetting | undefined = {} as UserLastSignInRecommendationInsightSetting) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewRecommendationInsightSetting(userLastSignInRecommendationInsightSetting),
        "recommendationLookBackDuration": n => { userLastSignInRecommendationInsightSetting.recommendationLookBackDuration = n.getDurationValue(); },
        "signInScope": n => { userLastSignInRecommendationInsightSetting.signInScope = n.getEnumValue<UserSignInRecommendationScope>(UserSignInRecommendationScope); },
    }
}
