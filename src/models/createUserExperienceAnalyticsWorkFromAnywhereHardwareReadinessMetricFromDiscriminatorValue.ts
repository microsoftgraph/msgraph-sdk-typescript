import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric';
import {UserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetricFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereHardwareReadinessMetric;
}
