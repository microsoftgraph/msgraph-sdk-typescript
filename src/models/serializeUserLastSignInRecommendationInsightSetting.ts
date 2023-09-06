import { serializeAccessReviewRecommendationInsightSetting } from './serializeAccessReviewRecommendationInsightSetting';
import { type UserLastSignInRecommendationInsightSetting } from './userLastSignInRecommendationInsightSetting';
import { UserSignInRecommendationScope } from './userSignInRecommendationScope';
import { Duration, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserLastSignInRecommendationInsightSetting(writer: SerializationWriter, userLastSignInRecommendationInsightSetting: UserLastSignInRecommendationInsightSetting | undefined = {} as UserLastSignInRecommendationInsightSetting) : void {
        serializeAccessReviewRecommendationInsightSetting(writer, userLastSignInRecommendationInsightSetting)
        writer.writeDurationValue("recommendationLookBackDuration", userLastSignInRecommendationInsightSetting.recommendationLookBackDuration);
        writer.writeEnumValue<UserSignInRecommendationScope>("signInScope", userLastSignInRecommendationInsightSetting.signInScope);
}
