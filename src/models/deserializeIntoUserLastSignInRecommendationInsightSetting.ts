import {deserializeIntoAccessReviewRecommendationInsightSetting} from './deserializeIntoAccessReviewRecommendationInsightSetting';
import type {UserLastSignInRecommendationInsightSetting} from './userLastSignInRecommendationInsightSetting';
import {UserSignInRecommendationScope} from './userSignInRecommendationScope';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';
import {Duration} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserLastSignInRecommendationInsightSetting(userLastSignInRecommendationInsightSetting: UserLastSignInRecommendationInsightSetting | undefined = {} as UserLastSignInRecommendationInsightSetting) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewRecommendationInsightSetting(userLastSignInRecommendationInsightSetting),
        "recommendationLookBackDuration": n => { userLastSignInRecommendationInsightSetting.recommendationLookBackDuration = n.getDurationValue(); },
        "signInScope": n => { userLastSignInRecommendationInsightSetting.signInScope = n.getEnumValue<UserSignInRecommendationScope>(UserSignInRecommendationScope); },
    }
}
