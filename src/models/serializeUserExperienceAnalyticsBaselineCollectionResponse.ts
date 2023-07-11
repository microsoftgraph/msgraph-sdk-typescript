import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsBaseline} from './serializeUserExperienceAnalyticsBaseline';
import {UserExperienceAnalyticsBaseline} from './userExperienceAnalyticsBaseline';
import {UserExperienceAnalyticsBaselineCollectionResponse} from './userExperienceAnalyticsBaselineCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsBaselineCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsBaselineCollectionResponse: UserExperienceAnalyticsBaselineCollectionResponse | undefined = {} as UserExperienceAnalyticsBaselineCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsBaselineCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsBaseline>("value", userExperienceAnalyticsBaselineCollectionResponse.value, serializeUserExperienceAnalyticsBaseline);
}
