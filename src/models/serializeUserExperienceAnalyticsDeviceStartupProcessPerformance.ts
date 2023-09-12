import { serializeEntity } from './serializeEntity';
import { type UserExperienceAnalyticsDeviceStartupProcessPerformance } from './userExperienceAnalyticsDeviceStartupProcessPerformance';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDeviceStartupProcessPerformance(writer: SerializationWriter, userExperienceAnalyticsDeviceStartupProcessPerformance: UserExperienceAnalyticsDeviceStartupProcessPerformance | undefined = {} as UserExperienceAnalyticsDeviceStartupProcessPerformance) : void {
        serializeEntity(writer, userExperienceAnalyticsDeviceStartupProcessPerformance)
        writer.writeNumberValue("deviceCount", userExperienceAnalyticsDeviceStartupProcessPerformance.deviceCount);
        writer.writeNumberValue("medianImpactInMs", userExperienceAnalyticsDeviceStartupProcessPerformance.medianImpactInMs);
        writer.writeStringValue("processName", userExperienceAnalyticsDeviceStartupProcessPerformance.processName);
        writer.writeStringValue("productName", userExperienceAnalyticsDeviceStartupProcessPerformance.productName);
        writer.writeStringValue("publisher", userExperienceAnalyticsDeviceStartupProcessPerformance.publisher);
        writer.writeNumberValue("totalImpactInMs", userExperienceAnalyticsDeviceStartupProcessPerformance.totalImpactInMs);
}
