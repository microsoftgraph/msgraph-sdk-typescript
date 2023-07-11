import {deserializeIntoUserExperienceAnalyticsMetric} from './deserializeIntoUserExperienceAnalyticsMetric';
import {UserExperienceAnalyticsMetric} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsMetricFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsMetric;
}
