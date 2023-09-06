import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type UserExperienceAnalyticsAppHealthOSVersionPerformance } from './userExperienceAnalyticsAppHealthOSVersionPerformance';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformance(userExperienceAnalyticsAppHealthOSVersionPerformance: UserExperienceAnalyticsAppHealthOSVersionPerformance | undefined = {} as UserExperienceAnalyticsAppHealthOSVersionPerformance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsAppHealthOSVersionPerformance),
        "activeDeviceCount": n => { userExperienceAnalyticsAppHealthOSVersionPerformance.activeDeviceCount = n.getNumberValue(); },
        "meanTimeToFailureInMinutes": n => { userExperienceAnalyticsAppHealthOSVersionPerformance.meanTimeToFailureInMinutes = n.getNumberValue(); },
        "osBuildNumber": n => { userExperienceAnalyticsAppHealthOSVersionPerformance.osBuildNumber = n.getStringValue(); },
        "osVersion": n => { userExperienceAnalyticsAppHealthOSVersionPerformance.osVersion = n.getStringValue(); },
        "osVersionAppHealthScore": n => { userExperienceAnalyticsAppHealthOSVersionPerformance.osVersionAppHealthScore = n.getNumberValue(); },
    }
}
