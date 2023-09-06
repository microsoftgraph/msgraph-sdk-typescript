import { serializeEntity } from './serializeEntity';
import { type UserExperienceAnalyticsAppHealthOSVersionPerformance } from './userExperienceAnalyticsAppHealthOSVersionPerformance';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAppHealthOSVersionPerformance(writer: SerializationWriter, userExperienceAnalyticsAppHealthOSVersionPerformance: UserExperienceAnalyticsAppHealthOSVersionPerformance | undefined = {} as UserExperienceAnalyticsAppHealthOSVersionPerformance) : void {
        serializeEntity(writer, userExperienceAnalyticsAppHealthOSVersionPerformance)
        writer.writeNumberValue("activeDeviceCount", userExperienceAnalyticsAppHealthOSVersionPerformance.activeDeviceCount);
        writer.writeNumberValue("meanTimeToFailureInMinutes", userExperienceAnalyticsAppHealthOSVersionPerformance.meanTimeToFailureInMinutes);
        writer.writeStringValue("osBuildNumber", userExperienceAnalyticsAppHealthOSVersionPerformance.osBuildNumber);
        writer.writeStringValue("osVersion", userExperienceAnalyticsAppHealthOSVersionPerformance.osVersion);
        writer.writeNumberValue("osVersionAppHealthScore", userExperienceAnalyticsAppHealthOSVersionPerformance.osVersionAppHealthScore);
}
