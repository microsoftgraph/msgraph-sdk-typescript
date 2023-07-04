import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformance} from './userExperienceAnalyticsAppHealthDeviceModelPerformance';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance(writer: SerializationWriter, userExperienceAnalyticsAppHealthDeviceModelPerformance: UserExperienceAnalyticsAppHealthDeviceModelPerformance | undefined = {} as UserExperienceAnalyticsAppHealthDeviceModelPerformance) : void {
        serializeEntity(writer, userExperienceAnalyticsAppHealthDeviceModelPerformance)
        writer.writeNumberValue("activeDeviceCount", userExperienceAnalyticsAppHealthDeviceModelPerformance.activeDeviceCount);
        writer.writeStringValue("deviceManufacturer", userExperienceAnalyticsAppHealthDeviceModelPerformance.deviceManufacturer);
        writer.writeStringValue("deviceModel", userExperienceAnalyticsAppHealthDeviceModelPerformance.deviceModel);
        writer.writeEnumValue<UserExperienceAnalyticsHealthState>("healthStatus", userExperienceAnalyticsAppHealthDeviceModelPerformance.healthStatus);
        writer.writeNumberValue("meanTimeToFailureInMinutes", userExperienceAnalyticsAppHealthDeviceModelPerformance.meanTimeToFailureInMinutes);
        writer.writeNumberValue("modelAppHealthScore", userExperienceAnalyticsAppHealthDeviceModelPerformance.modelAppHealthScore);
}
