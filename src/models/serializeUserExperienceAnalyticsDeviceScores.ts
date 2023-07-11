import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsDeviceScores} from './userExperienceAnalyticsDeviceScores';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDeviceScores(writer: SerializationWriter, userExperienceAnalyticsDeviceScores: UserExperienceAnalyticsDeviceScores | undefined = {} as UserExperienceAnalyticsDeviceScores) : void {
        serializeEntity(writer, userExperienceAnalyticsDeviceScores)
        writer.writeNumberValue("appReliabilityScore", userExperienceAnalyticsDeviceScores.appReliabilityScore);
        writer.writeNumberValue("batteryHealthScore", userExperienceAnalyticsDeviceScores.batteryHealthScore);
        writer.writeStringValue("deviceName", userExperienceAnalyticsDeviceScores.deviceName);
        writer.writeNumberValue("endpointAnalyticsScore", userExperienceAnalyticsDeviceScores.endpointAnalyticsScore);
        writer.writeEnumValue<UserExperienceAnalyticsHealthState>("healthStatus", userExperienceAnalyticsDeviceScores.healthStatus);
        writer.writeStringValue("manufacturer", userExperienceAnalyticsDeviceScores.manufacturer);
        writer.writeStringValue("model", userExperienceAnalyticsDeviceScores.model);
        writer.writeNumberValue("startupPerformanceScore", userExperienceAnalyticsDeviceScores.startupPerformanceScore);
        writer.writeNumberValue("workFromAnywhereScore", userExperienceAnalyticsDeviceScores.workFromAnywhereScore);
}
