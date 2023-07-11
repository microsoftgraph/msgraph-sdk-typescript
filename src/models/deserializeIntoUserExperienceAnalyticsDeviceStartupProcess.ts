import {deserializeIntoEntity} from './deserializeIntoEntity';
import {UserExperienceAnalyticsDeviceStartupProcess} from './userExperienceAnalyticsDeviceStartupProcess';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

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
