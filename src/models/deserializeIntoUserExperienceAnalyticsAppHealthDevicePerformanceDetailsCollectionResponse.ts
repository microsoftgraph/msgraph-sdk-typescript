import { createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue } from './createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails } from './serializeUserExperienceAnalyticsAppHealthDevicePerformanceDetails';
import { type UserExperienceAnalyticsAppHealthDevicePerformanceDetails } from './userExperienceAnalyticsAppHealthDevicePerformanceDetails';
import { type UserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse } from './userExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse(userExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse: UserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse | undefined = {} as UserExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse),
        "value": n => { userExperienceAnalyticsAppHealthDevicePerformanceDetailsCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsAppHealthDevicePerformanceDetails>(createUserExperienceAnalyticsAppHealthDevicePerformanceDetailsFromDiscriminatorValue); },
    }
}
