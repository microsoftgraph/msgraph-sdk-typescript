import {AccessReviewScheduleSettingsImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAccessReviewScheduleSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) : AccessReviewScheduleSettingsImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AccessReviewScheduleSettingsImpl();
}
