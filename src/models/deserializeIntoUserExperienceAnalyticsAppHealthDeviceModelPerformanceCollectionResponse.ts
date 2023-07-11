import {createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue} from './createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance} from './serializeUserExperienceAnalyticsAppHealthDeviceModelPerformance';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformance} from './userExperienceAnalyticsAppHealthDeviceModelPerformance';
import {UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse} from './userExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse(userExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse: UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse | undefined = {} as UserExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse),
        "value": n => { userExperienceAnalyticsAppHealthDeviceModelPerformanceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsAppHealthDeviceModelPerformance>(createUserExperienceAnalyticsAppHealthDeviceModelPerformanceFromDiscriminatorValue); },
    }
}
