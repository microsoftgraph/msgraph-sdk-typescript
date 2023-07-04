import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from './userExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion(writer: SerializationWriter, userExperienceAnalyticsAppHealthAppPerformanceByOSVersion: UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion | undefined = {} as UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion) : void {
        serializeEntity(writer, userExperienceAnalyticsAppHealthAppPerformanceByOSVersion)
        writer.writeNumberValue("activeDeviceCount", userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.activeDeviceCount);
        writer.writeNumberValue("appCrashCount", userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.appCrashCount);
        writer.writeStringValue("appDisplayName", userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.appDisplayName);
        writer.writeStringValue("appName", userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.appName);
        writer.writeStringValue("appPublisher", userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.appPublisher);
        writer.writeNumberValue("appUsageDuration", userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.appUsageDuration);
        writer.writeNumberValue("meanTimeToFailureInMinutes", userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.meanTimeToFailureInMinutes);
        writer.writeStringValue("osBuildNumber", userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.osBuildNumber);
        writer.writeStringValue("osVersion", userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.osVersion);
}
