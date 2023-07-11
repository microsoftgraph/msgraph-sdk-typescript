import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsDeviceStartupHistory} from './userExperienceAnalyticsDeviceStartupHistory';
import {UserExperienceAnalyticsOperatingSystemRestartCategory} from './userExperienceAnalyticsOperatingSystemRestartCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDeviceStartupHistory(writer: SerializationWriter, userExperienceAnalyticsDeviceStartupHistory: UserExperienceAnalyticsDeviceStartupHistory | undefined = {} as UserExperienceAnalyticsDeviceStartupHistory) : void {
        serializeEntity(writer, userExperienceAnalyticsDeviceStartupHistory)
        writer.writeNumberValue("coreBootTimeInMs", userExperienceAnalyticsDeviceStartupHistory.coreBootTimeInMs);
        writer.writeNumberValue("coreLoginTimeInMs", userExperienceAnalyticsDeviceStartupHistory.coreLoginTimeInMs);
        writer.writeStringValue("deviceId", userExperienceAnalyticsDeviceStartupHistory.deviceId);
        writer.writeNumberValue("featureUpdateBootTimeInMs", userExperienceAnalyticsDeviceStartupHistory.featureUpdateBootTimeInMs);
        writer.writeNumberValue("groupPolicyBootTimeInMs", userExperienceAnalyticsDeviceStartupHistory.groupPolicyBootTimeInMs);
        writer.writeNumberValue("groupPolicyLoginTimeInMs", userExperienceAnalyticsDeviceStartupHistory.groupPolicyLoginTimeInMs);
        writer.writeBooleanValue("isFeatureUpdate", userExperienceAnalyticsDeviceStartupHistory.isFeatureUpdate);
        writer.writeBooleanValue("isFirstLogin", userExperienceAnalyticsDeviceStartupHistory.isFirstLogin);
        writer.writeStringValue("operatingSystemVersion", userExperienceAnalyticsDeviceStartupHistory.operatingSystemVersion);
        writer.writeNumberValue("responsiveDesktopTimeInMs", userExperienceAnalyticsDeviceStartupHistory.responsiveDesktopTimeInMs);
        writer.writeEnumValue<UserExperienceAnalyticsOperatingSystemRestartCategory>("restartCategory", userExperienceAnalyticsDeviceStartupHistory.restartCategory);
        writer.writeStringValue("restartFaultBucket", userExperienceAnalyticsDeviceStartupHistory.restartFaultBucket);
        writer.writeStringValue("restartStopCode", userExperienceAnalyticsDeviceStartupHistory.restartStopCode);
        writer.writeDateValue("startTime", userExperienceAnalyticsDeviceStartupHistory.startTime);
        writer.writeNumberValue("totalBootTimeInMs", userExperienceAnalyticsDeviceStartupHistory.totalBootTimeInMs);
        writer.writeNumberValue("totalLoginTimeInMs", userExperienceAnalyticsDeviceStartupHistory.totalLoginTimeInMs);
}
