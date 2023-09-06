import { deserializeIntoAccessReviewHistoryScheduleSettings } from './deserializeIntoAccessReviewHistoryScheduleSettings';
import { type AccessReviewHistoryScheduleSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewHistoryScheduleSettings;
}
