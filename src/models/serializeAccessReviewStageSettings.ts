import {AccessReviewRecommendationInsightSetting} from './accessReviewRecommendationInsightSetting';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewStageSettings} from './accessReviewStageSettings';
import {serializeAccessReviewRecommendationInsightSetting} from './serializeAccessReviewRecommendationInsightSetting';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewStageSettings(writer: SerializationWriter, accessReviewStageSettings: AccessReviewStageSettings | undefined = {} as AccessReviewStageSettings) : void {
        writer.writeCollectionOfPrimitiveValues<string>("decisionsThatWillMoveToNextStage", accessReviewStageSettings.decisionsThatWillMoveToNextStage);
        writer.writeCollectionOfPrimitiveValues<string>("dependsOn", accessReviewStageSettings.dependsOn);
        writer.writeNumberValue("durationInDays", accessReviewStageSettings.durationInDays);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("fallbackReviewers", accessReviewStageSettings.fallbackReviewers, serializeAccessReviewReviewerScope);
        writer.writeStringValue("@odata.type", accessReviewStageSettings.odataType);
        writer.writeCollectionOfObjectValues<AccessReviewRecommendationInsightSetting>("recommendationInsightSettings", accessReviewStageSettings.recommendationInsightSettings, serializeAccessReviewRecommendationInsightSetting);
        writer.writeBooleanValue("recommendationsEnabled", accessReviewStageSettings.recommendationsEnabled);
        writer.writeCollectionOfObjectValues<AccessReviewReviewerScope>("reviewers", accessReviewStageSettings.reviewers, serializeAccessReviewReviewerScope);
        writer.writeStringValue("stageId", accessReviewStageSettings.stageId);
        writer.writeAdditionalData(accessReviewStageSettings.additionalData);
}
