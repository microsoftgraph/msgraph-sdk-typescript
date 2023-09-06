import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsDeviceStartupProcess } from './serializeUserExperienceAnalyticsDeviceStartupProcess';
import { type UserExperienceAnalyticsDeviceStartupProcess } from './userExperienceAnalyticsDeviceStartupProcess';
import { type UserExperienceAnalyticsDeviceStartupProcessCollectionResponse } from './userExperienceAnalyticsDeviceStartupProcessCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDeviceStartupProcessCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsDeviceStartupProcessCollectionResponse: UserExperienceAnalyticsDeviceStartupProcessCollectionResponse | undefined = {} as UserExperienceAnalyticsDeviceStartupProcessCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsDeviceStartupProcessCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDeviceStartupProcess>("value", userExperienceAnalyticsDeviceStartupProcessCollectionResponse.value, serializeUserExperienceAnalyticsDeviceStartupProcess);
}
