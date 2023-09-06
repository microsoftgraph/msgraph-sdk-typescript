import { serializeEntity } from './serializeEntity';
import { type UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails } from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

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
