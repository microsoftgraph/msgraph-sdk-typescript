import { serializeEntity } from './serializeEntity';
import { type UserExperienceAnalyticsAppHealthDevicePerformanceDetails } from './userExperienceAnalyticsAppHealthDevicePerformanceDetails';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails(writer: SerializationWriter, userExperienceAnalyticsAppHealthDevicePerformanceDetails: UserExperienceAnalyticsAppHealthDevicePerformanceDetails | undefined = {} as UserExperienceAnalyticsAppHealthDevicePerformanceDetails) : void {
        serializeEntity(writer, userExperienceAnalyticsAppHealthDevicePerformanceDetails)
        writer.writeStringValue("appDisplayName", userExperienceAnalyticsAppHealthDevicePerformanceDetails.appDisplayName);
        writer.writeStringValue("appPublisher", userExperienceAnalyticsAppHealthDevicePerformanceDetails.appPublisher);
        writer.writeStringValue("appVersion", userExperienceAnalyticsAppHealthDevicePerformanceDetails.appVersion);
        writer.writeStringValue("deviceDisplayName", userExperienceAnalyticsAppHealthDevicePerformanceDetails.deviceDisplayName);
        writer.writeStringValue("deviceId", userExperienceAnalyticsAppHealthDevicePerformanceDetails.deviceId);
        writer.writeDateValue("eventDateTime", userExperienceAnalyticsAppHealthDevicePerformanceDetails.eventDateTime);
        writer.writeStringValue("eventType", userExperienceAnalyticsAppHealthDevicePerformanceDetails.eventType);
}
