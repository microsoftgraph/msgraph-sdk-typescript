import {createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue} from './createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsAppHealthOSVersionPerformance} from './serializeUserExperienceAnalyticsAppHealthOSVersionPerformance';
import type {UserExperienceAnalyticsAppHealthOSVersionPerformance} from './userExperienceAnalyticsAppHealthOSVersionPerformance';
import type {UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse} from './userExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse(userExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse: UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse),
        "value": n => { userExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsAppHealthOSVersionPerformance>(createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue); },
    }
}
