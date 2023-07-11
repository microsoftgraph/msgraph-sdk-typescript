import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsDevicePerformance} from './serializeUserExperienceAnalyticsDevicePerformance';
import {UserExperienceAnalyticsDevicePerformance} from './userExperienceAnalyticsDevicePerformance';
import {UserExperienceAnalyticsDevicePerformanceCollectionResponse} from './userExperienceAnalyticsDevicePerformanceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDevicePerformanceCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsDevicePerformanceCollectionResponse: UserExperienceAnalyticsDevicePerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsDevicePerformanceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsDevicePerformanceCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDevicePerformance>("value", userExperienceAnalyticsDevicePerformanceCollectionResponse.value, serializeUserExperienceAnalyticsDevicePerformance);
}
