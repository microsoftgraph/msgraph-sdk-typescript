import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId(writer: SerializationWriter, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId | undefined = {} as UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId) : void {
        serializeEntity(writer, userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId)
        writer.writeNumberValue("appCrashCount", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.appCrashCount);
        writer.writeStringValue("appDisplayName", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.appDisplayName);
        writer.writeStringValue("appName", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.appName);
        writer.writeStringValue("appPublisher", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.appPublisher);
        writer.writeStringValue("appVersion", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.appVersion);
        writer.writeStringValue("deviceDisplayName", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.deviceDisplayName);
        writer.writeStringValue("deviceId", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.deviceId);
        writer.writeDateValue("processedDateTime", userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.processedDateTime);
}
