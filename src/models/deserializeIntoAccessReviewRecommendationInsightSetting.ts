import {AccessReviewRecommendationInsightSetting} from './accessReviewRecommendationInsightSetting';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewRecommendationInsightSetting(accessReviewRecommendationInsightSetting: AccessReviewRecommendationInsightSetting | undefined = {} as AccessReviewRecommendationInsightSetting) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewRecommendationInsightSetting.odataType = n.getStringValue(); },
    }
}
