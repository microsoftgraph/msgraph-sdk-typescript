import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetric} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetric';
import {UserExperienceAnalyticsWorkFromAnywhereMetric} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereMetricFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereMetric;
}
