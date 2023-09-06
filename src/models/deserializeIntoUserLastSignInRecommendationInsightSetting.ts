import { deserializeIntoAccessReviewRecommendationInsightSetting } from './deserializeIntoAccessReviewRecommendationInsightSetting';
import { type UserLastSignInRecommendationInsightSetting } from './userLastSignInRecommendationInsightSetting';
import { UserSignInRecommendationScope } from './userSignInRecommendationScope';
import { Duration, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserLastSignInRecommendationInsightSetting(userLastSignInRecommendationInsightSetting: UserLastSignInRecommendationInsightSetting | undefined = {} as UserLastSignInRecommendationInsightSetting) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewRecommendationInsightSetting(userLastSignInRecommendationInsightSetting),
        "recommendationLookBackDuration": n => { userLastSignInRecommendationInsightSetting.recommendationLookBackDuration = n.getDurationValue(); },
        "signInScope": n => { userLastSignInRecommendationInsightSetting.signInScope = n.getEnumValue<UserSignInRecommendationScope>(UserSignInRecommendationScope); },
    }
}
