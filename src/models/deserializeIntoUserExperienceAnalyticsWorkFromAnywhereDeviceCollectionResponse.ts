import {createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue} from './createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsWorkFromAnywhereDevice} from './serializeUserExperienceAnalyticsWorkFromAnywhereDevice';
import {UserExperienceAnalyticsWorkFromAnywhereDevice} from './userExperienceAnalyticsWorkFromAnywhereDevice';
import {UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse} from './userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse(userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse: UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse),
        "value": n => { userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereDevice>(createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue); },
    }
}
