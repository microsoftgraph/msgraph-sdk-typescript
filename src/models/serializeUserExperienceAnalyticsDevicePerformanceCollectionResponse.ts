import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsDevicePerformance } from './serializeUserExperienceAnalyticsDevicePerformance';
import { type UserExperienceAnalyticsDevicePerformance } from './userExperienceAnalyticsDevicePerformance';
import { type UserExperienceAnalyticsDevicePerformanceCollectionResponse } from './userExperienceAnalyticsDevicePerformanceCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDevicePerformanceCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsDevicePerformanceCollectionResponse: UserExperienceAnalyticsDevicePerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsDevicePerformanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsDevicePerformanceCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDevicePerformance>("value", userExperienceAnalyticsDevicePerformanceCollectionResponse.value, serializeUserExperienceAnalyticsDevicePerformance);
}
