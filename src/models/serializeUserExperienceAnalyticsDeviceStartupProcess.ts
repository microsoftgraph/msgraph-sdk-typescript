import { serializeEntity } from './serializeEntity';
import { type UserExperienceAnalyticsDeviceStartupProcess } from './userExperienceAnalyticsDeviceStartupProcess';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDeviceStartupProcess(writer: SerializationWriter, userExperienceAnalyticsDeviceStartupProcess: UserExperienceAnalyticsDeviceStartupProcess | undefined = {} as UserExperienceAnalyticsDeviceStartupProcess) : void {
        serializeEntity(writer, userExperienceAnalyticsDeviceStartupProcess)
        writer.writeStringValue("managedDeviceId", userExperienceAnalyticsDeviceStartupProcess.managedDeviceId);
        writer.writeStringValue("processName", userExperienceAnalyticsDeviceStartupProcess.processName);
        writer.writeStringValue("productName", userExperienceAnalyticsDeviceStartupProcess.productName);
        writer.writeStringValue("publisher", userExperienceAnalyticsDeviceStartupProcess.publisher);
        writer.writeNumberValue("startupImpactInMs", userExperienceAnalyticsDeviceStartupProcess.startupImpactInMs);
}
