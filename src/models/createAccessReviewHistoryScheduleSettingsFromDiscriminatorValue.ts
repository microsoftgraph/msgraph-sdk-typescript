import {deserializeIntoAccessReviewHistoryScheduleSettings} from './deserializeIntoAccessReviewHistoryScheduleSettings';
import {AccessReviewHistoryScheduleSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewHistoryScheduleSettings;
}
