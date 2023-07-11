import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsAppHealthApplicationPerformance} from './userExperienceAnalyticsAppHealthApplicationPerformance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAppHealthApplicationPerformance(writer: SerializationWriter, userExperienceAnalyticsAppHealthApplicationPerformance: UserExperienceAnalyticsAppHealthApplicationPerformance | undefined = {} as UserExperienceAnalyticsAppHealthApplicationPerformance) : void {
        serializeEntity(writer, userExperienceAnalyticsAppHealthApplicationPerformance)
        writer.writeNumberValue("activeDeviceCount", userExperienceAnalyticsAppHealthApplicationPerformance.activeDeviceCount);
        writer.writeNumberValue("appCrashCount", userExperienceAnalyticsAppHealthApplicationPerformance.appCrashCount);
        writer.writeStringValue("appDisplayName", userExperienceAnalyticsAppHealthApplicationPerformance.appDisplayName);
        writer.writeNumberValue("appHangCount", userExperienceAnalyticsAppHealthApplicationPerformance.appHangCount);
        writer.writeNumberValue("appHealthScore", userExperienceAnalyticsAppHealthApplicationPerformance.appHealthScore);
        writer.writeStringValue("appName", userExperienceAnalyticsAppHealthApplicationPerformance.appName);
        writer.writeStringValue("appPublisher", userExperienceAnalyticsAppHealthApplicationPerformance.appPublisher);
        writer.writeNumberValue("appUsageDuration", userExperienceAnalyticsAppHealthApplicationPerformance.appUsageDuration);
        writer.writeNumberValue("meanTimeToFailureInMinutes", userExperienceAnalyticsAppHealthApplicationPerformance.meanTimeToFailureInMinutes);
}
