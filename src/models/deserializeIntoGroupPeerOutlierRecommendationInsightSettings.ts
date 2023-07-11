import {deserializeIntoAccessReviewRecommendationInsightSetting} from './deserializeIntoAccessReviewRecommendationInsightSetting';
import {GroupPeerOutlierRecommendationInsightSettings} from './groupPeerOutlierRecommendationInsightSettings';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoGroupPeerOutlierRecommendationInsightSettings(groupPeerOutlierRecommendationInsightSettings: GroupPeerOutlierRecommendationInsightSettings | undefined = {} as GroupPeerOutlierRecommendationInsightSettings) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAccessReviewRecommendationInsightSetting(groupPeerOutlierRecommendationInsightSettings),
    }
}
