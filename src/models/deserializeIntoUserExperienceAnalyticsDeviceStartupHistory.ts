import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsDeviceStartupHistory} from './userExperienceAnalyticsDeviceStartupHistory';
import {UserExperienceAnalyticsOperatingSystemRestartCategory} from './userExperienceAnalyticsOperatingSystemRestartCategory';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDeviceStartupHistory(userExperienceAnalyticsDeviceStartupHistory: UserExperienceAnalyticsDeviceStartupHistory | undefined = {} as UserExperienceAnalyticsDeviceStartupHistory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsDeviceStartupHistory),
        "coreBootTimeInMs": n => { userExperienceAnalyticsDeviceStartupHistory.coreBootTimeInMs = n.getNumberValue(); },
        "coreLoginTimeInMs": n => { userExperienceAnalyticsDeviceStartupHistory.coreLoginTimeInMs = n.getNumberValue(); },
        "deviceId": n => { userExperienceAnalyticsDeviceStartupHistory.deviceId = n.getStringValue(); },
        "featureUpdateBootTimeInMs": n => { userExperienceAnalyticsDeviceStartupHistory.featureUpdateBootTimeInMs = n.getNumberValue(); },
        "groupPolicyBootTimeInMs": n => { userExperienceAnalyticsDeviceStartupHistory.groupPolicyBootTimeInMs = n.getNumberValue(); },
        "groupPolicyLoginTimeInMs": n => { userExperienceAnalyticsDeviceStartupHistory.groupPolicyLoginTimeInMs = n.getNumberValue(); },
        "isFeatureUpdate": n => { userExperienceAnalyticsDeviceStartupHistory.isFeatureUpdate = n.getBooleanValue(); },
        "isFirstLogin": n => { userExperienceAnalyticsDeviceStartupHistory.isFirstLogin = n.getBooleanValue(); },
        "operatingSystemVersion": n => { userExperienceAnalyticsDeviceStartupHistory.operatingSystemVersion = n.getStringValue(); },
        "responsiveDesktopTimeInMs": n => { userExperienceAnalyticsDeviceStartupHistory.responsiveDesktopTimeInMs = n.getNumberValue(); },
        "restartCategory": n => { userExperienceAnalyticsDeviceStartupHistory.restartCategory = n.getEnumValue<UserExperienceAnalyticsOperatingSystemRestartCategory>(UserExperienceAnalyticsOperatingSystemRestartCategory); },
        "restartFaultBucket": n => { userExperienceAnalyticsDeviceStartupHistory.restartFaultBucket = n.getStringValue(); },
        "restartStopCode": n => { userExperienceAnalyticsDeviceStartupHistory.restartStopCode = n.getStringValue(); },
        "startTime": n => { userExperienceAnalyticsDeviceStartupHistory.startTime = n.getDateValue(); },
        "totalBootTimeInMs": n => { userExperienceAnalyticsDeviceStartupHistory.totalBootTimeInMs = n.getNumberValue(); },
        "totalLoginTimeInMs": n => { userExperienceAnalyticsDeviceStartupHistory.totalLoginTimeInMs = n.getNumberValue(); },
    }
}
