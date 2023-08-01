import {createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue} from './createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance} from './serializeUserExperienceAnalyticsWorkFromAnywhereModelPerformance';
import type {UserExperienceAnalyticsWorkFromAnywhereModelPerformance} from './userExperienceAnalyticsWorkFromAnywhereModelPerformance';
import type {UserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse} from './userExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse(userExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse: UserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse),
        "value": n => { userExperienceAnalyticsWorkFromAnywhereModelPerformanceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereModelPerformance>(createUserExperienceAnalyticsWorkFromAnywhereModelPerformanceFromDiscriminatorValue); },
    }
}
