import {deserializeIntoUserExperienceAnalyticsMetricHistory} from './deserializeIntoUserExperienceAnalyticsMetricHistory';
import {UserExperienceAnalyticsMetricHistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsMetricHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsMetricHistory;
}
