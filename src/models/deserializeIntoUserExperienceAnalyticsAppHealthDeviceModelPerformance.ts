import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformance} from './userExperienceAnalyticsAppHealthDeviceModelPerformance';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformance(userExperienceAnalyticsAppHealthDeviceModelPerformance: UserExperienceAnalyticsAppHealthDeviceModelPerformance | undefined = {} as UserExperienceAnalyticsAppHealthDeviceModelPerformance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsAppHealthDeviceModelPerformance),
        "activeDeviceCount": n => { userExperienceAnalyticsAppHealthDeviceModelPerformance.activeDeviceCount = n.getNumberValue(); },
        "deviceManufacturer": n => { userExperienceAnalyticsAppHealthDeviceModelPerformance.deviceManufacturer = n.getStringValue(); },
        "deviceModel": n => { userExperienceAnalyticsAppHealthDeviceModelPerformance.deviceModel = n.getStringValue(); },
        "healthStatus": n => { userExperienceAnalyticsAppHealthDeviceModelPerformance.healthStatus = n.getEnumValue<UserExperienceAnalyticsHealthState>(UserExperienceAnalyticsHealthState); },
        "meanTimeToFailureInMinutes": n => { userExperienceAnalyticsAppHealthDeviceModelPerformance.meanTimeToFailureInMinutes = n.getNumberValue(); },
        "modelAppHealthScore": n => { userExperienceAnalyticsAppHealthDeviceModelPerformance.modelAppHealthScore = n.getNumberValue(); },
    }
}
