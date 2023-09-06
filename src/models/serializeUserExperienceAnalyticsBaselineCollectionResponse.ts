import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsBaseline } from './serializeUserExperienceAnalyticsBaseline';
import { type UserExperienceAnalyticsBaseline } from './userExperienceAnalyticsBaseline';
import { type UserExperienceAnalyticsBaselineCollectionResponse } from './userExperienceAnalyticsBaselineCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsBaselineCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsBaselineCollectionResponse: UserExperienceAnalyticsBaselineCollectionResponse | undefined = {} as UserExperienceAnalyticsBaselineCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsBaselineCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsBaseline>("value", userExperienceAnalyticsBaselineCollectionResponse.value, serializeUserExperienceAnalyticsBaseline);
}
