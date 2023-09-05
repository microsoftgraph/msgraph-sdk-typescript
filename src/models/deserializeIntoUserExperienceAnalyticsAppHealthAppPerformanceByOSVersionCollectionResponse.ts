import { createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionFromDiscriminatorValue } from './createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion } from './serializeUserExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import { type UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion } from './userExperienceAnalyticsAppHealthAppPerformanceByOSVersion';
import { type UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse } from './userExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse(userExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse: UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse | undefined = {} as UserExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse),
        "value": n => { userExperienceAnalyticsAppHealthAppPerformanceByOSVersionCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsAppHealthAppPerformanceByOSVersion>(createUserExperienceAnalyticsAppHealthAppPerformanceByOSVersionFromDiscriminatorValue); },
    }
}
