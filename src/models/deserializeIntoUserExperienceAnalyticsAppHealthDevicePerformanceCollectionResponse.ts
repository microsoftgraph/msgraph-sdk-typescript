import {createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue} from './createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsAppHealthDevicePerformance} from './serializeUserExperienceAnalyticsAppHealthDevicePerformance';
import {UserExperienceAnalyticsAppHealthDevicePerformance} from './userExperienceAnalyticsAppHealthDevicePerformance';
import {UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse} from './userExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse(userExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse: UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse),
        "value": n => { userExperienceAnalyticsAppHealthDevicePerformanceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsAppHealthDevicePerformance>(createUserExperienceAnalyticsAppHealthDevicePerformanceFromDiscriminatorValue); },
    }
}
