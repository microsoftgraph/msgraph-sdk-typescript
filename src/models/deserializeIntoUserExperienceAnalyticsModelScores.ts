import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import type {UserExperienceAnalyticsModelScores} from './userExperienceAnalyticsModelScores';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsModelScores(userExperienceAnalyticsModelScores: UserExperienceAnalyticsModelScores | undefined = {} as UserExperienceAnalyticsModelScores) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsModelScores),
        "appReliabilityScore": n => { userExperienceAnalyticsModelScores.appReliabilityScore = n.getNumberValue(); },
        "batteryHealthScore": n => { userExperienceAnalyticsModelScores.batteryHealthScore = n.getNumberValue(); },
        "endpointAnalyticsScore": n => { userExperienceAnalyticsModelScores.endpointAnalyticsScore = n.getNumberValue(); },
        "healthStatus": n => { userExperienceAnalyticsModelScores.healthStatus = n.getEnumValue<UserExperienceAnalyticsHealthState>(UserExperienceAnalyticsHealthState); },
        "manufacturer": n => { userExperienceAnalyticsModelScores.manufacturer = n.getStringValue(); },
        "model": n => { userExperienceAnalyticsModelScores.model = n.getStringValue(); },
        "modelDeviceCount": n => { userExperienceAnalyticsModelScores.modelDeviceCount = n.getNumberValue(); },
        "startupPerformanceScore": n => { userExperienceAnalyticsModelScores.startupPerformanceScore = n.getNumberValue(); },
        "workFromAnywhereScore": n => { userExperienceAnalyticsModelScores.workFromAnywhereScore = n.getNumberValue(); },
    }
}
