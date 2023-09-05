import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsDeviceStartupHistory } from './serializeUserExperienceAnalyticsDeviceStartupHistory';
import { type UserExperienceAnalyticsDeviceStartupHistory } from './userExperienceAnalyticsDeviceStartupHistory';
import { type UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse } from './userExperienceAnalyticsDeviceStartupHistoryCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDeviceStartupHistoryCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsDeviceStartupHistoryCollectionResponse: UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse | undefined = {} as UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsDeviceStartupHistoryCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDeviceStartupHistory>("value", userExperienceAnalyticsDeviceStartupHistoryCollectionResponse.value, serializeUserExperienceAnalyticsDeviceStartupHistory);
}
