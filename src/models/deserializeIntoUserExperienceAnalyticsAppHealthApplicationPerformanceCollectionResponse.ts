import {createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue} from './createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsAppHealthApplicationPerformance} from './serializeUserExperienceAnalyticsAppHealthApplicationPerformance';
import type {UserExperienceAnalyticsAppHealthApplicationPerformance} from './userExperienceAnalyticsAppHealthApplicationPerformance';
import type {UserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse} from './userExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse(userExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse: UserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse),
        "value": n => { userExperienceAnalyticsAppHealthApplicationPerformanceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsAppHealthApplicationPerformance>(createUserExperienceAnalyticsAppHealthApplicationPerformanceFromDiscriminatorValue); },
    }
}
