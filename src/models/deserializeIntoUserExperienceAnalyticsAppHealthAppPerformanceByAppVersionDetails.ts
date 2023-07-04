import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails} from './userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails(userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails: UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails | undefined = {} as UserExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails),
        "appCrashCount": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.appCrashCount = n.getNumberValue(); },
        "appDisplayName": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.appDisplayName = n.getStringValue(); },
        "appName": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.appName = n.getStringValue(); },
        "appPublisher": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.appPublisher = n.getStringValue(); },
        "appVersion": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.appVersion = n.getStringValue(); },
        "deviceCountWithCrashes": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.deviceCountWithCrashes = n.getNumberValue(); },
        "isLatestUsedVersion": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.isLatestUsedVersion = n.getBooleanValue(); },
        "isMostUsedVersion": n => { userExperienceAnalyticsAppHealthAppPerformanceByAppVersionDetails.isMostUsedVersion = n.getBooleanValue(); },
    }
}
