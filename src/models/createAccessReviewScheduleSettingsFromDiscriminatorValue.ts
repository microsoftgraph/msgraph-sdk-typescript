import { deserializeIntoAccessReviewScheduleSettings } from './deserializeIntoAccessReviewScheduleSettings';
import { type AccessReviewScheduleSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createAccessReviewScheduleSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoAccessReviewScheduleSettings;
}
