import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsMetricHistory} from './userExperienceAnalyticsMetricHistory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsMetricHistory(userExperienceAnalyticsMetricHistory: UserExperienceAnalyticsMetricHistory | undefined = {} as UserExperienceAnalyticsMetricHistory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsMetricHistory),
        "deviceId": n => { userExperienceAnalyticsMetricHistory.deviceId = n.getStringValue(); },
        "metricDateTime": n => { userExperienceAnalyticsMetricHistory.metricDateTime = n.getDateValue(); },
        "metricType": n => { userExperienceAnalyticsMetricHistory.metricType = n.getStringValue(); },
    }
}
