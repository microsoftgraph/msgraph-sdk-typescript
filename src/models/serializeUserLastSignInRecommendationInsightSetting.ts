import {serializeAccessReviewRecommendationInsightSetting} from './serializeAccessReviewRecommendationInsightSetting';
import type {UserLastSignInRecommendationInsightSetting} from './userLastSignInRecommendationInsightSetting';
import {UserSignInRecommendationScope} from './userSignInRecommendationScope';
import {Duration} from '@microsoft/kiota-abstractions';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserLastSignInRecommendationInsightSetting(writer: SerializationWriter, userLastSignInRecommendationInsightSetting: UserLastSignInRecommendationInsightSetting | undefined = {} as UserLastSignInRecommendationInsightSetting) : void {
        serializeAccessReviewRecommendationInsightSetting(writer, userLastSignInRecommendationInsightSetting)
        writer.writeDurationValue("recommendationLookBackDuration", userLastSignInRecommendationInsightSetting.recommendationLookBackDuration);
        writer.writeEnumValue<UserSignInRecommendationScope>("signInScope", userLastSignInRecommendationInsightSetting.signInScope);
}
