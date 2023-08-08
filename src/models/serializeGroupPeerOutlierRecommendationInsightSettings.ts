import type {GroupPeerOutlierRecommendationInsightSettings} from './groupPeerOutlierRecommendationInsightSettings';
import {serializeAccessReviewRecommendationInsightSetting} from './serializeAccessReviewRecommendationInsightSetting';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeGroupPeerOutlierRecommendationInsightSettings(writer: SerializationWriter, groupPeerOutlierRecommendationInsightSettings: GroupPeerOutlierRecommendationInsightSettings | undefined = {} as GroupPeerOutlierRecommendationInsightSettings) : void {
        serializeAccessReviewRecommendationInsightSetting(writer, groupPeerOutlierRecommendationInsightSettings)
}
