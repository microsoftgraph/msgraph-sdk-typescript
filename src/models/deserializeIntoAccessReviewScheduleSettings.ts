import {AccessReviewApplyAction} from './accessReviewApplyAction';
import {AccessReviewScheduleSettings} from './accessReviewScheduleSettings';
import {createAccessReviewApplyActionFromDiscriminatorValue} from './createAccessReviewApplyActionFromDiscriminatorValue';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import {PatternedRecurrence} from './patternedRecurrence';
import {serializeAccessReviewApplyAction} from './serializeAccessReviewApplyAction';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
        "recommendationsEnabled": n => { accessReviewScheduleSettings.recommendationsEnabled = n.getBooleanValue(); },
        "recurrence": n => { accessReviewScheduleSettings.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
        "reminderNotificationsEnabled": n => { accessReviewScheduleSettings.reminderNotificationsEnabled = n.getBooleanValue(); },
    }
}
