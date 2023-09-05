import { type AccessReviewApplyAction } from './accessReviewApplyAction';
import { type AccessReviewRecommendationInsightSetting } from './accessReviewRecommendationInsightSetting';
import { type AccessReviewScheduleSettings } from './accessReviewScheduleSettings';
import { type PatternedRecurrence } from './patternedRecurrence';
import { serializeAccessReviewApplyAction } from './serializeAccessReviewApplyAction';
import { serializeAccessReviewRecommendationInsightSetting } from './serializeAccessReviewRecommendationInsightSetting';
import { serializePatternedRecurrence } from './serializePatternedRecurrence';
import { Duration, type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewScheduleSettings(writer: SerializationWriter, accessReviewScheduleSettings: AccessReviewScheduleSettings | undefined = {} as AccessReviewScheduleSettings) : void {
        writer.writeCollectionOfObjectValues<AccessReviewApplyAction>("applyActions", accessReviewScheduleSettings.applyActions, serializeAccessReviewApplyAction);
        writer.writeBooleanValue("autoApplyDecisionsEnabled", accessReviewScheduleSettings.autoApplyDecisionsEnabled);
        writer.writeBooleanValue("decisionHistoriesForReviewersEnabled", accessReviewScheduleSettings.decisionHistoriesForReviewersEnabled);
        writer.writeStringValue("defaultDecision", accessReviewScheduleSettings.defaultDecision);
        writer.writeBooleanValue("defaultDecisionEnabled", accessReviewScheduleSettings.defaultDecisionEnabled);
        writer.writeNumberValue("instanceDurationInDays", accessReviewScheduleSettings.instanceDurationInDays);
        writer.writeBooleanValue("justificationRequiredOnApproval", accessReviewScheduleSettings.justificationRequiredOnApproval);
        writer.writeBooleanValue("mailNotificationsEnabled", accessReviewScheduleSettings.mailNotificationsEnabled);
        writer.writeStringValue("@odata.type", accessReviewScheduleSettings.odataType);
        writer.writeCollectionOfObjectValues<AccessReviewRecommendationInsightSetting>("recommendationInsightSettings", accessReviewScheduleSettings.recommendationInsightSettings, serializeAccessReviewRecommendationInsightSetting);
        writer.writeDurationValue("recommendationLookBackDuration", accessReviewScheduleSettings.recommendationLookBackDuration);
        writer.writeBooleanValue("recommendationsEnabled", accessReviewScheduleSettings.recommendationsEnabled);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", accessReviewScheduleSettings.recurrence, serializePatternedRecurrence);
        writer.writeBooleanValue("reminderNotificationsEnabled", accessReviewScheduleSettings.reminderNotificationsEnabled);
        writer.writeAdditionalData(accessReviewScheduleSettings.additionalData);
}
