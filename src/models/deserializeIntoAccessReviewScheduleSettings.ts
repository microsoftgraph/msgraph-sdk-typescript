import {AccessReviewApplyAction} from './accessReviewApplyAction';
import {AccessReviewRecommendationInsightSetting} from './accessReviewRecommendationInsightSetting';
import {AccessReviewScheduleSettings} from './accessReviewScheduleSettings';
import {createAccessReviewApplyActionFromDiscriminatorValue} from './createAccessReviewApplyActionFromDiscriminatorValue';
import {createAccessReviewRecommendationInsightSettingFromDiscriminatorValue} from './createAccessReviewRecommendationInsightSettingFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {PatternedRecurrence} from './patternedRecurrence';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import {serializeAccessReviewRecommendationInsightSetting} from './serializeAccessReviewRecommendationInsightSetting';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Duration, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewScheduleSettings(accessReviewScheduleSettings: AccessReviewScheduleSettings | undefined = {} as AccessReviewScheduleSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "applyActions": n => { accessReviewScheduleSettings.applyActions = n.getCollectionOfObjectValues<AccessReviewApplyAction>(createAccessReviewApplyActionFromDiscriminatorValue); },
        "autoApplyDecisionsEnabled": n => { accessReviewScheduleSettings.autoApplyDecisionsEnabled = n.getBooleanValue(); },
        "decisionHistoriesForReviewersEnabled": n => { accessReviewScheduleSettings.decisionHistoriesForReviewersEnabled = n.getBooleanValue(); },
        "defaultDecision": n => { accessReviewScheduleSettings.defaultDecision = n.getStringValue(); },
        "defaultDecisionEnabled": n => { accessReviewScheduleSettings.defaultDecisionEnabled = n.getBooleanValue(); },
        "instanceDurationInDays": n => { accessReviewScheduleSettings.instanceDurationInDays = n.getNumberValue(); },
        "justificationRequiredOnApproval": n => { accessReviewScheduleSettings.justificationRequiredOnApproval = n.getBooleanValue(); },
        "mailNotificationsEnabled": n => { accessReviewScheduleSettings.mailNotificationsEnabled = n.getBooleanValue(); },
        "@odata.type": n => { accessReviewScheduleSettings.odataType = n.getStringValue(); },
        "recommendationInsightSettings": n => { accessReviewScheduleSettings.recommendationInsightSettings = n.getCollectionOfObjectValues<AccessReviewRecommendationInsightSetting>(createAccessReviewRecommendationInsightSettingFromDiscriminatorValue); },
        "recommendationLookBackDuration": n => { accessReviewScheduleSettings.recommendationLookBackDuration = n.getDurationValue(); },
        "recommendationsEnabled": n => { accessReviewScheduleSettings.recommendationsEnabled = n.getBooleanValue(); },
        "recurrence": n => { accessReviewScheduleSettings.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
        "reminderNotificationsEnabled": n => { accessReviewScheduleSettings.reminderNotificationsEnabled = n.getBooleanValue(); },
    }
}
