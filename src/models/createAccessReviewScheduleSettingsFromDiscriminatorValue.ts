import {deserializeIntoAccessReviewScheduleSettings} from './deserializeIntoAccessReviewScheduleSettings';
import {AccessReviewScheduleSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScheduleSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewScheduleSettings;
}
