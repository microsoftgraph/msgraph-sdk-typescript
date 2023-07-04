import {createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue} from './createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsDeviceStartupHistory} from './serializeUserExperienceAnalyticsDeviceStartupHistory';
import {UserExperienceAnalyticsDeviceStartupHistory} from './userExperienceAnalyticsDeviceStartupHistory';
import {UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse} from './userExperienceAnalyticsDeviceStartupHistoryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDeviceStartupHistoryCollectionResponse(userExperienceAnalyticsDeviceStartupHistoryCollectionResponse: UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse | undefined = {} as UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsDeviceStartupHistoryCollectionResponse),
        "value": n => { userExperienceAnalyticsDeviceStartupHistoryCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsDeviceStartupHistory>(createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue); },
    }
}
