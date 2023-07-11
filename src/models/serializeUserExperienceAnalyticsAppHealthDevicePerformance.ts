import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsAppHealthDevicePerformance} from './userExperienceAnalyticsAppHealthDevicePerformance';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAppHealthDevicePerformance(writer: SerializationWriter, userExperienceAnalyticsAppHealthDevicePerformance: UserExperienceAnalyticsAppHealthDevicePerformance | undefined = {} as UserExperienceAnalyticsAppHealthDevicePerformance) : void {
        serializeEntity(writer, userExperienceAnalyticsAppHealthDevicePerformance)
        writer.writeNumberValue("appCrashCount", userExperienceAnalyticsAppHealthDevicePerformance.appCrashCount);
        writer.writeNumberValue("appHangCount", userExperienceAnalyticsAppHealthDevicePerformance.appHangCount);
        writer.writeNumberValue("crashedAppCount", userExperienceAnalyticsAppHealthDevicePerformance.crashedAppCount);
        writer.writeNumberValue("deviceAppHealthScore", userExperienceAnalyticsAppHealthDevicePerformance.deviceAppHealthScore);
        writer.writeStringValue("deviceDisplayName", userExperienceAnalyticsAppHealthDevicePerformance.deviceDisplayName);
        writer.writeStringValue("deviceId", userExperienceAnalyticsAppHealthDevicePerformance.deviceId);
        writer.writeStringValue("deviceManufacturer", userExperienceAnalyticsAppHealthDevicePerformance.deviceManufacturer);
        writer.writeStringValue("deviceModel", userExperienceAnalyticsAppHealthDevicePerformance.deviceModel);
        writer.writeEnumValue<UserExperienceAnalyticsHealthState>("healthStatus", userExperienceAnalyticsAppHealthDevicePerformance.healthStatus);
        writer.writeNumberValue("meanTimeToFailureInMinutes", userExperienceAnalyticsAppHealthDevicePerformance.meanTimeToFailureInMinutes);
        writer.writeDateValue("processedDateTime", userExperienceAnalyticsAppHealthDevicePerformance.processedDateTime);
}
