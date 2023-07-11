import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsAppHealthOSVersionPerformance} from './userExperienceAnalyticsAppHealthOSVersionPerformance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAppHealthOSVersionPerformance(writer: SerializationWriter, userExperienceAnalyticsAppHealthOSVersionPerformance: UserExperienceAnalyticsAppHealthOSVersionPerformance | undefined = {} as UserExperienceAnalyticsAppHealthOSVersionPerformance) : void {
        serializeEntity(writer, userExperienceAnalyticsAppHealthOSVersionPerformance)
        writer.writeNumberValue("activeDeviceCount", userExperienceAnalyticsAppHealthOSVersionPerformance.activeDeviceCount);
        writer.writeNumberValue("meanTimeToFailureInMinutes", userExperienceAnalyticsAppHealthOSVersionPerformance.meanTimeToFailureInMinutes);
        writer.writeStringValue("osBuildNumber", userExperienceAnalyticsAppHealthOSVersionPerformance.osBuildNumber);
        writer.writeStringValue("osVersion", userExperienceAnalyticsAppHealthOSVersionPerformance.osVersion);
        writer.writeNumberValue("osVersionAppHealthScore", userExperienceAnalyticsAppHealthOSVersionPerformance.osVersionAppHealthScore);
}
