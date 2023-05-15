import {DiskType} from './diskType';
import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsDevicePerformance} from './userExperienceAnalyticsDevicePerformance';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDevicePerformance(writer: SerializationWriter, userExperienceAnalyticsDevicePerformance: UserExperienceAnalyticsDevicePerformance | undefined = {} as UserExperienceAnalyticsDevicePerformance) : void {
        serializeEntity(writer, userExperienceAnalyticsDevicePerformance)
        writer.writeNumberValue("averageBlueScreens", userExperienceAnalyticsDevicePerformance.averageBlueScreens);
        writer.writeNumberValue("averageRestarts", userExperienceAnalyticsDevicePerformance.averageRestarts);
        writer.writeNumberValue("blueScreenCount", userExperienceAnalyticsDevicePerformance.blueScreenCount);
        writer.writeNumberValue("bootScore", userExperienceAnalyticsDevicePerformance.bootScore);
        writer.writeNumberValue("coreBootTimeInMs", userExperienceAnalyticsDevicePerformance.coreBootTimeInMs);
        writer.writeNumberValue("coreLoginTimeInMs", userExperienceAnalyticsDevicePerformance.coreLoginTimeInMs);
        writer.writeNumberValue("deviceCount", userExperienceAnalyticsDevicePerformance.deviceCount);
        writer.writeStringValue("deviceName", userExperienceAnalyticsDevicePerformance.deviceName);
        writer.writeEnumValue<DiskType>("diskType", userExperienceAnalyticsDevicePerformance.diskType);
        writer.writeNumberValue("groupPolicyBootTimeInMs", userExperienceAnalyticsDevicePerformance.groupPolicyBootTimeInMs);
        writer.writeNumberValue("groupPolicyLoginTimeInMs", userExperienceAnalyticsDevicePerformance.groupPolicyLoginTimeInMs);
        writer.writeEnumValue<UserExperienceAnalyticsHealthState>("healthStatus", userExperienceAnalyticsDevicePerformance.healthStatus);
        writer.writeNumberValue("loginScore", userExperienceAnalyticsDevicePerformance.loginScore);
        writer.writeStringValue("manufacturer", userExperienceAnalyticsDevicePerformance.manufacturer);
        writer.writeStringValue("model", userExperienceAnalyticsDevicePerformance.model);
        writer.writeNumberValue("modelStartupPerformanceScore", userExperienceAnalyticsDevicePerformance.modelStartupPerformanceScore);
        writer.writeStringValue("operatingSystemVersion", userExperienceAnalyticsDevicePerformance.operatingSystemVersion);
        writer.writeNumberValue("responsiveDesktopTimeInMs", userExperienceAnalyticsDevicePerformance.responsiveDesktopTimeInMs);
        writer.writeNumberValue("restartCount", userExperienceAnalyticsDevicePerformance.restartCount);
        writer.writeNumberValue("startupPerformanceScore", userExperienceAnalyticsDevicePerformance.startupPerformanceScore);
}
