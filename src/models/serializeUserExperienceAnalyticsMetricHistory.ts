import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsMetricHistory} from './userExperienceAnalyticsMetricHistory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsMetricHistory(writer: SerializationWriter, userExperienceAnalyticsMetricHistory: UserExperienceAnalyticsMetricHistory | undefined = {} as UserExperienceAnalyticsMetricHistory) : void {
        serializeEntity(writer, userExperienceAnalyticsMetricHistory)
        writer.writeStringValue("deviceId", userExperienceAnalyticsMetricHistory.deviceId);
        writer.writeDateValue("metricDateTime", userExperienceAnalyticsMetricHistory.metricDateTime);
        writer.writeStringValue("metricType", userExperienceAnalyticsMetricHistory.metricType);
}
