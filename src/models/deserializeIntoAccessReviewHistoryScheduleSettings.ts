import type {AccessReviewHistoryScheduleSettings} from './accessReviewHistoryScheduleSettings';
import {createPatternedRecurrenceFromDiscriminatorValue} from './createPatternedRecurrenceFromDiscriminatorValue';
import type {PatternedRecurrence} from './patternedRecurrence';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import type {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAccessReviewHistoryScheduleSettings(accessReviewHistoryScheduleSettings: AccessReviewHistoryScheduleSettings | undefined = {} as AccessReviewHistoryScheduleSettings) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { accessReviewHistoryScheduleSettings.odataType = n.getStringValue(); },
        "recurrence": n => { accessReviewHistoryScheduleSettings.recurrence = n.getObjectValue<PatternedRecurrence>(createPatternedRecurrenceFromDiscriminatorValue); },
        "reportRange": n => { accessReviewHistoryScheduleSettings.reportRange = n.getStringValue(); },
    }
}
