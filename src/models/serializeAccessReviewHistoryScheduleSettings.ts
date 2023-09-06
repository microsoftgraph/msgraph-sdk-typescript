import { type AccessReviewHistoryScheduleSettings } from './accessReviewHistoryScheduleSettings';
import { type PatternedRecurrence } from './patternedRecurrence';
import { serializePatternedRecurrence } from './serializePatternedRecurrence';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryScheduleSettings(writer: SerializationWriter, accessReviewHistoryScheduleSettings: AccessReviewHistoryScheduleSettings | undefined = {} as AccessReviewHistoryScheduleSettings) : void {
        writer.writeStringValue("@odata.type", accessReviewHistoryScheduleSettings.odataType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", accessReviewHistoryScheduleSettings.recurrence, serializePatternedRecurrence);
        writer.writeStringValue("reportRange", accessReviewHistoryScheduleSettings.reportRange);
        writer.writeAdditionalData(accessReviewHistoryScheduleSettings.additionalData);
}
