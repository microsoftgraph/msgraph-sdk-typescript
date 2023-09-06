import { serializeEntity } from './serializeEntity';
import { type UserExperienceAnalyticsMetricHistory } from './userExperienceAnalyticsMetricHistory';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsMetricHistory(writer: SerializationWriter, userExperienceAnalyticsMetricHistory: UserExperienceAnalyticsMetricHistory | undefined = {} as UserExperienceAnalyticsMetricHistory) : void {
        serializeEntity(writer, userExperienceAnalyticsMetricHistory)
        writer.writeStringValue("deviceId", userExperienceAnalyticsMetricHistory.deviceId);
        writer.writeDateValue("metricDateTime", userExperienceAnalyticsMetricHistory.metricDateTime);
        writer.writeStringValue("metricType", userExperienceAnalyticsMetricHistory.metricType);
}
