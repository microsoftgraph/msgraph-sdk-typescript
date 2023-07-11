import {createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue} from './createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsAppHealthOSVersionPerformance} from './serializeUserExperienceAnalyticsAppHealthOSVersionPerformance';
import {UserExperienceAnalyticsAppHealthOSVersionPerformance} from './userExperienceAnalyticsAppHealthOSVersionPerformance';
import {UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse} from './userExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse(userExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse: UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse),
        "value": n => { userExperienceAnalyticsAppHealthOSVersionPerformanceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsAppHealthOSVersionPerformance>(createUserExperienceAnalyticsAppHealthOSVersionPerformanceFromDiscriminatorValue); },
    }
}
