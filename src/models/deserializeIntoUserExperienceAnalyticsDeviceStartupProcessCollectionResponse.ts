import {createUserExperienceAnalyticsDeviceStartupProcessFromDiscriminatorValue} from './createUserExperienceAnalyticsDeviceStartupProcessFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsDeviceStartupProcess} from './serializeUserExperienceAnalyticsDeviceStartupProcess';
import type {UserExperienceAnalyticsDeviceStartupProcess} from './userExperienceAnalyticsDeviceStartupProcess';
import type {UserExperienceAnalyticsDeviceStartupProcessCollectionResponse} from './userExperienceAnalyticsDeviceStartupProcessCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDeviceStartupProcessCollectionResponse(userExperienceAnalyticsDeviceStartupProcessCollectionResponse: UserExperienceAnalyticsDeviceStartupProcessCollectionResponse | undefined = {} as UserExperienceAnalyticsDeviceStartupProcessCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsDeviceStartupProcessCollectionResponse),
        "value": n => { userExperienceAnalyticsDeviceStartupProcessCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsDeviceStartupProcess>(createUserExperienceAnalyticsDeviceStartupProcessFromDiscriminatorValue); },
    }
}
