import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsAppHealthApplicationPerformance} from './userExperienceAnalyticsAppHealthApplicationPerformance';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformance(userExperienceAnalyticsAppHealthApplicationPerformance: UserExperienceAnalyticsAppHealthApplicationPerformance | undefined = {} as UserExperienceAnalyticsAppHealthApplicationPerformance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsAppHealthApplicationPerformance),
        "activeDeviceCount": n => { userExperienceAnalyticsAppHealthApplicationPerformance.activeDeviceCount = n.getNumberValue(); },
        "appCrashCount": n => { userExperienceAnalyticsAppHealthApplicationPerformance.appCrashCount = n.getNumberValue(); },
        "appDisplayName": n => { userExperienceAnalyticsAppHealthApplicationPerformance.appDisplayName = n.getStringValue(); },
        "appHangCount": n => { userExperienceAnalyticsAppHealthApplicationPerformance.appHangCount = n.getNumberValue(); },
        "appHealthScore": n => { userExperienceAnalyticsAppHealthApplicationPerformance.appHealthScore = n.getNumberValue(); },
        "appName": n => { userExperienceAnalyticsAppHealthApplicationPerformance.appName = n.getStringValue(); },
        "appPublisher": n => { userExperienceAnalyticsAppHealthApplicationPerformance.appPublisher = n.getStringValue(); },
        "appUsageDuration": n => { userExperienceAnalyticsAppHealthApplicationPerformance.appUsageDuration = n.getNumberValue(); },
        "meanTimeToFailureInMinutes": n => { userExperienceAnalyticsAppHealthApplicationPerformance.meanTimeToFailureInMinutes = n.getNumberValue(); },
    }
}
