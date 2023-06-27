import {AccessReviewRecommendationInsightSetting} from './accessReviewRecommendationInsightSetting';
import {AccessReviewReviewerScope} from './accessReviewReviewerScope';
import {AccessReviewStageSettings} from './accessReviewStageSettings';
import {createAccessReviewRecommendationInsightSettingFromDiscriminatorValue} from './createAccessReviewRecommendationInsightSettingFromDiscriminatorValue';
import {createAccessReviewReviewerScopeFromDiscriminatorValue} from './createAccessReviewReviewerScopeFromDiscriminatorValue';
import {serializeAccessReviewRecommendationInsightSetting} from './serializeAccessReviewRecommendationInsightSetting';
import {serializeAccessReviewReviewerScope} from './serializeAccessReviewReviewerScope';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewStageSettings(accessReviewStageSettings: AccessReviewStageSettings | undefined = {} as AccessReviewStageSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "decisionsThatWillMoveToNextStage": n => { accessReviewStageSettings.decisionsThatWillMoveToNextStage = n.getCollectionOfPrimitiveValues<string>(); },
        "dependsOn": n => { accessReviewStageSettings.dependsOn = n.getCollectionOfPrimitiveValues<string>(); },
        "durationInDays": n => { accessReviewStageSettings.durationInDays = n.getNumberValue(); },
        "fallbackReviewers": n => { accessReviewStageSettings.fallbackReviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "@odata.type": n => { accessReviewStageSettings.odataType = n.getStringValue(); },
        "recommendationInsightSettings": n => { accessReviewStageSettings.recommendationInsightSettings = n.getCollectionOfObjectValues<AccessReviewRecommendationInsightSetting>(createAccessReviewRecommendationInsightSettingFromDiscriminatorValue); },
        "recommendationsEnabled": n => { accessReviewStageSettings.recommendationsEnabled = n.getBooleanValue(); },
        "reviewers": n => { accessReviewStageSettings.reviewers = n.getCollectionOfObjectValues<AccessReviewReviewerScope>(createAccessReviewReviewerScopeFromDiscriminatorValue); },
        "stageId": n => { accessReviewStageSettings.stageId = n.getStringValue(); },
    }
}
