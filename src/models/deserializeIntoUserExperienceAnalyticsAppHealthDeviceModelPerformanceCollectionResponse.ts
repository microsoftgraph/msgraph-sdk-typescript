import {createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue} from './createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance} from './serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance';
import type {UserExperienceAnalyticsAppHealthDeviceModelPerformance} from './userExperienceAnalyticsAppHealthDeviceModelPerformance';
import type {UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse} from './userExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse(userExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse: UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse),
        "value": n => { userExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsAppHealthDeviceModelPerformance>(createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue); },
    }
}
