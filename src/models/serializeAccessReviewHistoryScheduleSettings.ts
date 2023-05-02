import {AccessReviewHistoryScheduleSettings} from './accessReviewHistoryScheduleSettings';
import {PatternedRecurrence} from './patternedRecurrence';
import {serializePatternedRecurrence} from './serializePatternedRecurrence';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAccessReviewHistoryScheduleSettings(writer: SerializationWriter, accessReviewHistoryScheduleSettings: AccessReviewHistoryScheduleSettings | undefined = {} as AccessReviewHistoryScheduleSettings) : void {
        writer.writeStringValue("@odata.type", accessReviewHistoryScheduleSettings.odataType);
        writer.writeObjectValue<PatternedRecurrence>("recurrence", accessReviewHistoryScheduleSettings.recurrence, serializePatternedRecurrence);
        writer.writeStringValue("reportRange", accessReviewHistoryScheduleSettings.reportRange);
        writer.writeAdditionalData(accessReviewHistoryScheduleSettings.additionalData);
}
