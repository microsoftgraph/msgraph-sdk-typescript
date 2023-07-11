import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {UserExperienceAnalyticsModelScores} from './userExperienceAnalyticsModelScores';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsModelScores(writer: SerializationWriter, userExperienceAnalyticsModelScores: UserExperienceAnalyticsModelScores | undefined = {} as UserExperienceAnalyticsModelScores) : void {
        serializeEntity(writer, userExperienceAnalyticsModelScores)
        writer.writeNumberValue("appReliabilityScore", userExperienceAnalyticsModelScores.appReliabilityScore);
        writer.writeNumberValue("batteryHealthScore", userExperienceAnalyticsModelScores.batteryHealthScore);
        writer.writeNumberValue("endpointAnalyticsScore", userExperienceAnalyticsModelScores.endpointAnalyticsScore);
        writer.writeEnumValue<UserExperienceAnalyticsHealthState>("healthStatus", userExperienceAnalyticsModelScores.healthStatus);
        writer.writeStringValue("manufacturer", userExperienceAnalyticsModelScores.manufacturer);
        writer.writeStringValue("model", userExperienceAnalyticsModelScores.model);
        writer.writeNumberValue("modelDeviceCount", userExperienceAnalyticsModelScores.modelDeviceCount);
        writer.writeNumberValue("startupPerformanceScore", userExperienceAnalyticsModelScores.startupPerformanceScore);
        writer.writeNumberValue("workFromAnywhereScore", userExperienceAnalyticsModelScores.workFromAnywhereScore);
}
