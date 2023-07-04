import {deserializeIntoAccessReviewRecommendationInsightSetting} from './deserializeIntoAccessReviewRecommendationInsightSetting';
import {deserializeIntoGroupPeerOutlierRecommendationInsightSettings} from './deserializeIntoGroupPeerOutlierRecommendationInsightSettings';
import {deserializeIntoUserLastSignInRecommendationInsightSetting} from './deserializeIntoUserLastSignInRecommendationInsightSetting';
import {AccessReviewRecommendationInsightSetting, GroupPeerOutlierRecommendationInsightSettings, UserLastSignInRecommendationInsightSetting} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewRecommendationInsightSettingFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.groupPeerOutlierRecommendationInsightSettings":
                    return deserializeIntoGroupPeerOutlierRecommendationInsightSettings;
                case "#microsoft.graph.userLastSignInRecommendationInsightSetting":
                    return deserializeIntoUserLastSignInRecommendationInsightSetting;
            }
        }
    }
    return deserializeIntoAccessReviewRecommendationInsightSetting;
}
