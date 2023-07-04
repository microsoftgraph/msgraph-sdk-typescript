import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsDeviceScores} from './userExperienceAnalyticsDeviceScores';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDeviceScores(userExperienceAnalyticsDeviceScores: UserExperienceAnalyticsDeviceScores | undefined = {} as UserExperienceAnalyticsDeviceScores) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsDeviceScores),
        "appReliabilityScore": n => { userExperienceAnalyticsDeviceScores.appReliabilityScore = n.getNumberValue(); },
        "batteryHealthScore": n => { userExperienceAnalyticsDeviceScores.batteryHealthScore = n.getNumberValue(); },
        "deviceName": n => { userExperienceAnalyticsDeviceScores.deviceName = n.getStringValue(); },
        "endpointAnalyticsScore": n => { userExperienceAnalyticsDeviceScores.endpointAnalyticsScore = n.getNumberValue(); },
        "healthStatus": n => { userExperienceAnalyticsDeviceScores.healthStatus = n.getEnumValue<UserExperienceAnalyticsHealthState>(UserExperienceAnalyticsHealthState); },
        "manufacturer": n => { userExperienceAnalyticsDeviceScores.manufacturer = n.getStringValue(); },
        "model": n => { userExperienceAnalyticsDeviceScores.model = n.getStringValue(); },
        "startupPerformanceScore": n => { userExperienceAnalyticsDeviceScores.startupPerformanceScore = n.getNumberValue(); },
        "workFromAnywhereScore": n => { userExperienceAnalyticsDeviceScores.workFromAnywhereScore = n.getNumberValue(); },
    }
}
