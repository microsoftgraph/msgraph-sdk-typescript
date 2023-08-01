import {createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue} from './createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsDevicePerformance} from './serializeUserExperienceAnalyticsDevicePerformance';
import type {UserExperienceAnalyticsDevicePerformance} from './userExperienceAnalyticsDevicePerformance';
import type {UserExperienceAnalyticsDevicePerformanceCollectionResponse} from './userExperienceAnalyticsDevicePerformanceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDevicePerformanceCollectionResponse(userExperienceAnalyticsDevicePerformanceCollectionResponse: UserExperienceAnalyticsDevicePerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsDevicePerformanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsDevicePerformanceCollectionResponse),
        "value": n => { userExperienceAnalyticsDevicePerformanceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsDevicePerformance>(createUserExperienceAnalyticsDevicePerformanceFromDiscriminatorValue); },
    }
}
