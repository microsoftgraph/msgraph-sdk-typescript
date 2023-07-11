import {serializeEntity} from './serializeEntity';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {UserExperienceAnalyticsWorkFromAnywhereModelPerformance} from './userExperienceAnalyticsWorkFromAnywhereModelPerformance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance(writer: SerializationWriter, userExperienceAnalyticsWorkFromAnywhereModelPerformance: UserExperienceAnalyticsWorkFromAnywhereModelPerformance | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereModelPerformance) : void {
        serializeEntity(writer, userExperienceAnalyticsWorkFromAnywhereModelPerformance)
        writer.writeNumberValue("cloudIdentityScore", userExperienceAnalyticsWorkFromAnywhereModelPerformance.cloudIdentityScore);
        writer.writeNumberValue("cloudManagementScore", userExperienceAnalyticsWorkFromAnywhereModelPerformance.cloudManagementScore);
        writer.writeNumberValue("cloudProvisioningScore", userExperienceAnalyticsWorkFromAnywhereModelPerformance.cloudProvisioningScore);
        writer.writeEnumValue<UserExperienceAnalyticsHealthState>("healthStatus", userExperienceAnalyticsWorkFromAnywhereModelPerformance.healthStatus);
        writer.writeStringValue("manufacturer", userExperienceAnalyticsWorkFromAnywhereModelPerformance.manufacturer);
        writer.writeStringValue("model", userExperienceAnalyticsWorkFromAnywhereModelPerformance.model);
        writer.writeNumberValue("modelDeviceCount", userExperienceAnalyticsWorkFromAnywhereModelPerformance.modelDeviceCount);
        writer.writeNumberValue("windowsScore", userExperienceAnalyticsWorkFromAnywhereModelPerformance.windowsScore);
        writer.writeNumberValue("workFromAnywhereScore", userExperienceAnalyticsWorkFromAnywhereModelPerformance.workFromAnywhereScore);
}
