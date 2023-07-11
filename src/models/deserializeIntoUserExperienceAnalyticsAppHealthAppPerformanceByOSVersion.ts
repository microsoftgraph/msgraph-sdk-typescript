import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion} from './userExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion(userExperienceAnalyticsAppHealthAppPerformanceByOSVersion: UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion | undefined = {} as UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsAppHealthAppPerformanceByOSVersion),
        "activeDeviceCount": n => { userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.activeDeviceCount = n.getNumberValue(); },
        "appCrashCount": n => { userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.appCrashCount = n.getNumberValue(); },
        "appDisplayName": n => { userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.appDisplayName = n.getStringValue(); },
        "appName": n => { userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.appName = n.getStringValue(); },
        "appPublisher": n => { userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.appPublisher = n.getStringValue(); },
        "appUsageDuration": n => { userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.appUsageDuration = n.getNumberValue(); },
        "meanTimeToFailureInMinutes": n => { userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.meanTimeToFailureInMinutes = n.getNumberValue(); },
        "osBuildNumber": n => { userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.osBuildNumber = n.getStringValue(); },
        "osVersion": n => { userExperienceAnalyticsAppHealthAppPerformanceByOSVersion.osVersion = n.getStringValue(); },
    }
}
