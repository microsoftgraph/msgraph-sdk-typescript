import { deserializeIntoGroupPeerOutlierRecommendationInsightSettings } from './deserializeIntoGroupPeerOutlierRecommendationInsightSettings';
import { type GroupPeerOutlierRecommendationInsightSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createGroupPeerOutlierRecommendationInsightSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoGroupPeerOutlierRecommendationInsightSettings;
}
