import {AccessReviewApplyAction} from './accessReviewApplyAction';
import {AccessReviewRecommendationInsightSetting} from './accessReviewRecommendationInsightSetting';
import {AccessReviewScheduleSettings} from './accessReviewScheduleSettings';
import {PatternedRecurrence} from './patternedRecurrence';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import {serializeAccessReviewRecommendationInsightSetting} from './serializeAccessReviewRecommendationInsightSetting';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
