import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsWorkFromAnywhereDevice } from './serializeUserExperienceAnalyticsWorkFromAnywhereDevice';
import { type UserExperienceAnalyticsWorkFromAnywhereDevice } from './userExperienceAnalyticsWorkFromAnywhereDevice';
import { type UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse } from './userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse: UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse | undefined = {} as UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsWorkFromAnywhereDevice>("value", userExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse.value, serializeUserExperienceAnalyticsWorkFromAnywhereDevice);
}
