import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {UserExperienceAnalyticsWorkFromAnywhereModelPerformance} from './userExperienceAnalyticsWorkFromAnywhereModelPerformance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformance(userExperienceAnalyticsWorkFromAnywhereModelPerformance: UserExperienceAnalyticsWorkFromAnywhereModelPerformance | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereModelPerformance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsWorkFromAnywhereModelPerformance),
        "cloudIdentityScore": n => { userExperienceAnalyticsWorkFromAnywhereModelPerformance.cloudIdentityScore = n.getNumberValue(); },
        "cloudManagementScore": n => { userExperienceAnalyticsWorkFromAnywhereModelPerformance.cloudManagementScore = n.getNumberValue(); },
        "cloudProvisioningScore": n => { userExperienceAnalyticsWorkFromAnywhereModelPerformance.cloudProvisioningScore = n.getNumberValue(); },
        "healthStatus": n => { userExperienceAnalyticsWorkFromAnywhereModelPerformance.healthStatus = n.getEnumValue<UserExperienceAnalyticsHealthState>(UserExperienceAnalyticsHealthState); },
        "manufacturer": n => { userExperienceAnalyticsWorkFromAnywhereModelPerformance.manufacturer = n.getStringValue(); },
        "model": n => { userExperienceAnalyticsWorkFromAnywhereModelPerformance.model = n.getStringValue(); },
        "modelDeviceCount": n => { userExperienceAnalyticsWorkFromAnywhereModelPerformance.modelDeviceCount = n.getNumberValue(); },
        "windowsScore": n => { userExperienceAnalyticsWorkFromAnywhereModelPerformance.windowsScore = n.getNumberValue(); },
        "workFromAnywhereScore": n => { userExperienceAnalyticsWorkFromAnywhereModelPerformance.workFromAnywhereScore = n.getNumberValue(); },
    }
}
