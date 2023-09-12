import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type UserExperienceAnalyticsDeviceStartupProcessPerformance } from './userExperienceAnalyticsDeviceStartupProcessPerformance';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDeviceStartupProcessPerformance(userExperienceAnalyticsDeviceStartupProcessPerformance: UserExperienceAnalyticsDeviceStartupProcessPerformance | undefined = {} as UserExperienceAnalyticsDeviceStartupProcessPerformance) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsDeviceStartupProcessPerformance),
        "deviceCount": n => { userExperienceAnalyticsDeviceStartupProcessPerformance.deviceCount = n.getNumberValue(); },
        "medianImpactInMs": n => { userExperienceAnalyticsDeviceStartupProcessPerformance.medianImpactInMs = n.getNumberValue(); },
        "processName": n => { userExperienceAnalyticsDeviceStartupProcessPerformance.processName = n.getStringValue(); },
        "productName": n => { userExperienceAnalyticsDeviceStartupProcessPerformance.productName = n.getStringValue(); },
        "publisher": n => { userExperienceAnalyticsDeviceStartupProcessPerformance.publisher = n.getStringValue(); },
        "totalImpactInMs": n => { userExperienceAnalyticsDeviceStartupProcessPerformance.totalImpactInMs = n.getNumberValue(); },
    }
}
