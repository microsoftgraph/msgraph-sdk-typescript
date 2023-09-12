import { deserializeIntoAccessReviewRecommendationInsightSetting } from './deserializeIntoAccessReviewRecommendationInsightSetting';
import { type GroupPeerOutlierRecommendationInsightSettings } from './groupPeerOutlierRecommendationInsightSettings';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupPeerOutlierRecommendationInsightSettings(groupPeerOutlierRecommendationInsightSettings: GroupPeerOutlierRecommendationInsightSettings | undefined = {} as GroupPeerOutlierRecommendationInsightSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewRecommendationInsightSetting(groupPeerOutlierRecommendationInsightSettings),
    }
}
