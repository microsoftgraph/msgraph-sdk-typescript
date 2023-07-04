import {AccessReviewRecommendationInsightSetting} from './accessReviewRecommendationInsightSetting';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewRecommendationInsightSetting(writer: SerializationWriter, accessReviewRecommendationInsightSetting: AccessReviewRecommendationInsightSetting | undefined = {} as AccessReviewRecommendationInsightSetting) : void {
        writer.writeStringValue("@odata.type", accessReviewRecommendationInsightSetting.odataType);
        writer.writeAdditionalData(accessReviewRecommendationInsightSetting.additionalData);
}
