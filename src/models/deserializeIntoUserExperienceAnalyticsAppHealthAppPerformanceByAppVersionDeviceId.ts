import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId(userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId | undefined = {} as UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId),
        "appCrashCount": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.appCrashCount = n.getNumberValue(); },
        "appDisplayName": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.appDisplayName = n.getStringValue(); },
        "appName": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.appName = n.getStringValue(); },
        "appPublisher": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.appPublisher = n.getStringValue(); },
        "appVersion": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.appVersion = n.getStringValue(); },
        "deviceDisplayName": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.deviceDisplayName = n.getStringValue(); },
        "deviceId": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.deviceId = n.getStringValue(); },
        "processedDateTime": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDeviceId.processedDateTime = n.getDateValue(); },
    }
}
