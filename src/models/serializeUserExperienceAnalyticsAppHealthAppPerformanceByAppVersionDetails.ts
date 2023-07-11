import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails(writer: SerializationWriter, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails | undefined = {} as UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails) : void {
        serializeEntity(writer, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails)
        writer.writeNumberValue("appCrashCount", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.appCrashCount);
        writer.writeStringValue("appDisplayName", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.appDisplayName);
        writer.writeStringValue("appName", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.appName);
        writer.writeStringValue("appPublisher", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.appPublisher);
        writer.writeStringValue("appVersion", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.appVersion);
        writer.writeNumberValue("deviceCountWithCrashes", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.deviceCountWithCrashes);
        writer.writeBooleanValue("isLatestUsedVersion", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.isLatestUsedVersion);
        writer.writeBooleanValue("isMostUsedVersion", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.isMostUsedVersion);
}
