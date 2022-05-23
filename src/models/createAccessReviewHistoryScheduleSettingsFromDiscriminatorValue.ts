import {AccessReviewHistoryScheduleSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewHistoryScheduleSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewHistoryScheduleSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewHistoryScheduleSettingsImpl();
}
