import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type UserExperienceAnalyticsDeviceStartupProcess } from './userExperienceAnalyticsDeviceStartupProcess';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDeviceStartupProcess(userExperienceAnalyticsDeviceStartupProcess: UserExperienceAnalyticsDeviceStartupProcess | undefined = {} as UserExperienceAnalyticsDeviceStartupProcess) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsDeviceStartupProcess),
        "managedDeviceId": n => { userExperienceAnalyticsDeviceStartupProcess.managedDeviceId = n.getStringValue(); },
        "processName": n => { userExperienceAnalyticsDeviceStartupProcess.processName = n.getStringValue(); },
        "productName": n => { userExperienceAnalyticsDeviceStartupProcess.productName = n.getStringValue(); },
        "publisher": n => { userExperienceAnalyticsDeviceStartupProcess.publisher = n.getStringValue(); },
        "startupImpactInMs": n => { userExperienceAnalyticsDeviceStartupProcess.startupImpactInMs = n.getNumberValue(); },
    }
}
