import {deserializeIntoEntity} from './deserializeIntoEntity';
import {DiskType} from './diskType';
import {UserExperienceAnalyticsDevicePerformance} from './userExperienceAnalyticsDevicePerformance';
import {UserExperienceAnalyticsHealthState} from './userExperienceAnalyticsHealthState';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDevicePerformance(userExperienceAnalyticsDevicePerformance: UserExperienceAnalyticsDevicePerformance | undefined = {} as UserExperienceAnalyticsDevicePerformance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsDevicePerformance),
        "averageBlueScreens": n => { userExperienceAnalyticsDevicePerformance.averageBlueScreens = n.getNumberValue(); },
        "averageRestarts": n => { userExperienceAnalyticsDevicePerformance.averageRestarts = n.getNumberValue(); },
        "blueScreenCount": n => { userExperienceAnalyticsDevicePerformance.blueScreenCount = n.getNumberValue(); },
        "bootScore": n => { userExperienceAnalyticsDevicePerformance.bootScore = n.getNumberValue(); },
        "coreBootTimeInMs": n => { userExperienceAnalyticsDevicePerformance.coreBootTimeInMs = n.getNumberValue(); },
        "coreLoginTimeInMs": n => { userExperienceAnalyticsDevicePerformance.coreLoginTimeInMs = n.getNumberValue(); },
        "deviceCount": n => { userExperienceAnalyticsDevicePerformance.deviceCount = n.getNumberValue(); },
        "deviceName": n => { userExperienceAnalyticsDevicePerformance.deviceName = n.getStringValue(); },
        "diskType": n => { userExperienceAnalyticsDevicePerformance.diskType = n.getEnumValue<DiskType>(DiskType); },
        "groupPolicyBootTimeInMs": n => { userExperienceAnalyticsDevicePerformance.groupPolicyBootTimeInMs = n.getNumberValue(); },
        "groupPolicyLoginTimeInMs": n => { userExperienceAnalyticsDevicePerformance.groupPolicyLoginTimeInMs = n.getNumberValue(); },
        "healthStatus": n => { userExperienceAnalyticsDevicePerformance.healthStatus = n.getEnumValue<UserExperienceAnalyticsHealthState>(UserExperienceAnalyticsHealthState); },
        "loginScore": n => { userExperienceAnalyticsDevicePerformance.loginScore = n.getNumberValue(); },
        "manufacturer": n => { userExperienceAnalyticsDevicePerformance.manufacturer = n.getStringValue(); },
        "model": n => { userExperienceAnalyticsDevicePerformance.model = n.getStringValue(); },
        "modelStartupPerformanceScore": n => { userExperienceAnalyticsDevicePerformance.modelStartupPerformanceScore = n.getNumberValue(); },
        "operatingSystemVersion": n => { userExperienceAnalyticsDevicePerformance.operatingSystemVersion = n.getStringValue(); },
        "responsiveDesktopTimeInMs": n => { userExperienceAnalyticsDevicePerformance.responsiveDesktopTimeInMs = n.getNumberValue(); },
        "restartCount": n => { userExperienceAnalyticsDevicePerformance.restartCount = n.getNumberValue(); },
        "startupPerformanceScore": n => { userExperienceAnalyticsDevicePerformance.startupPerformanceScore = n.getNumberValue(); },
    }
}
