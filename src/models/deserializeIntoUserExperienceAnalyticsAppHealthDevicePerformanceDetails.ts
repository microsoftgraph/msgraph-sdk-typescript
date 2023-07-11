import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsAppHealthDevicePerformanceDetails} from './userExperienceAnalyticsAppHealthDevicePerformanceDetails';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetails(userExperienceAnalyticsAppHealthDevicePerformanceDetails: UserExperienceAnalyticsAppHealthDevicePerformanceDetails | undefined = {} as UserExperienceAnalyticsAppHealthDevicePerformanceDetails) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsAppHealthDevicePerformanceDetails),
        "appDisplayName": n => { userExperienceAnalyticsAppHealthDevicePerformanceDetails.appDisplayName = n.getStringValue(); },
        "appPublisher": n => { userExperienceAnalyticsAppHealthDevicePerformanceDetails.appPublisher = n.getStringValue(); },
        "appVersion": n => { userExperienceAnalyticsAppHealthDevicePerformanceDetails.appVersion = n.getStringValue(); },
        "deviceDisplayName": n => { userExperienceAnalyticsAppHealthDevicePerformanceDetails.deviceDisplayName = n.getStringValue(); },
        "deviceId": n => { userExperienceAnalyticsAppHealthDevicePerformanceDetails.deviceId = n.getStringValue(); },
        "eventDateTime": n => { userExperienceAnalyticsAppHealthDevicePerformanceDetails.eventDateTime = n.getDateValue(); },
        "eventType": n => { userExperienceAnalyticsAppHealthDevicePerformanceDetails.eventType = n.getStringValue(); },
    }
}
