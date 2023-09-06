import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsAppHealthDevicePerformance } from './serializeUserExperienceAnalyticsAppHealthDevicePerformance';
import { type UserExperienceAnalyticsAppHealthDevicePerformance } from './userExperienceAnalyticsAppHealthDevicePerformance';
import { type UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse } from './userExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse: UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsAppHealthDevicePerformance>("value", userExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse.value, serializeUserExperienceAnalyticsAppHealthDevicePerformance);
}
