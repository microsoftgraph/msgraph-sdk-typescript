import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsAppHealthDevicePerformance} from './userExperienceAnalyticsAppHealthDevicePerformance';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformance(userExperienceAnalyticsAppHealthDevicePerformance: UserExperienceAnalyticsAppHealthDevicePerformance | undefined = {} as UserExperienceAnalyticsAppHealthDevicePerformance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsAppHealthDevicePerformance),
        "appCrashCount": n => { userExperienceAnalyticsAppHealthDevicePerformance.appCrashCount = n.getNumberValue(); },
        "appHangCount": n => { userExperienceAnalyticsAppHealthDevicePerformance.appHangCount = n.getNumberValue(); },
        "crashedAppCount": n => { userExperienceAnalyticsAppHealthDevicePerformance.crashedAppCount = n.getNumberValue(); },
        "deviceAppHealthScore": n => { userExperienceAnalyticsAppHealthDevicePerformance.deviceAppHealthScore = n.getNumberValue(); },
        "deviceDisplayName": n => { userExperienceAnalyticsAppHealthDevicePerformance.deviceDisplayName = n.getStringValue(); },
        "deviceId": n => { userExperienceAnalyticsAppHealthDevicePerformance.deviceId = n.getStringValue(); },
        "deviceManufacturer": n => { userExperienceAnalyticsAppHealthDevicePerformance.deviceManufacturer = n.getStringValue(); },
        "deviceModel": n => { userExperienceAnalyticsAppHealthDevicePerformance.deviceModel = n.getStringValue(); },
        "healthStatus": n => { userExperienceAnalyticsAppHealthDevicePerformance.healthStatus = n.getEnumValue<UserExperienceAnalyticsHealthState>(UserExperienceAnalyticsHealthState); },
        "meanTimeToFailureInMinutes": n => { userExperienceAnalyticsAppHealthDevicePerformance.meanTimeToFailureInMinutes = n.getNumberValue(); },
        "processedDateTime": n => { userExperienceAnalyticsAppHealthDevicePerformance.processedDateTime = n.getDateValue(); },
    }
}
