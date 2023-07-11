import {deserializeIntoUserExperienceAnalyticsAutopilotDevicesSummary} from './deserializeIntoUserExperienceAnalyticsAutopilotDevicesSummary';
import {UserExperienceAnalyticsAutopilotDevicesSummary} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsAutopilotDevicesSummaryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsAutopilotDevicesSummary;
}
