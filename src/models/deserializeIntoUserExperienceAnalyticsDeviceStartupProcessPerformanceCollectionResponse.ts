import { createUserExperienceAnalyticsDeviceStartupProcessPerformanceFromDiscriminatorValue } from './createUserExperienceAnalyticsDeviceStartupProcessPerformanceFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsDeviceStartupProcessPerformance } from './serializeUserExperienceAnalyticsDeviceStartupProcessPerformance';
import { type UserExperienceAnalyticsDeviceStartupProcessPerformance } from './userExperienceAnalyticsDeviceStartupProcessPerformance';
import { type UserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse } from './userExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse(userExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse: UserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse),
        "value": n => { userExperienceAnalyticsDeviceStartupProcessPerformanceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsDeviceStartupProcessPerformance>(createUserExperienceAnalyticsDeviceStartupProcessPerformanceFromDiscriminatorValue); },
    }
}
