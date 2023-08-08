import {createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue} from './createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsWorkFromAnywhereDevice} from './serializeUserExperienceAnalyticsWorkFromAnywhereDevice';
import type {UserExperienceAnalyticsWorkFromAnywhereDevice} from './userExperienceAnalyticsWorkFromAnywhereDevice';
import type {UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse} from './userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse(userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse: UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse),
        "value": n => { userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereDevice>(createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue); },
    }
}
