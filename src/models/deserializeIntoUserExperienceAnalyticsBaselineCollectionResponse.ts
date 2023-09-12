import { createUserExperienceAnalyticsBaselineFromDiscriminatorValue } from './createUserExperienceAnalyticsBaselineFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsBaseline } from './serializeUserExperienceAnalyticsBaseline';
import { type UserExperienceAnalyticsBaseline } from './userExperienceAnalyticsBaseline';
import { type UserExperienceAnalyticsBaselineCollectionResponse } from './userExperienceAnalyticsBaselineCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsBaselineCollectionResponse(userExperienceAnalyticsBaselineCollectionResponse: UserExperienceAnalyticsBaselineCollectionResponse | undefined = {} as UserExperienceAnalyticsBaselineCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsBaselineCollectionResponse),
        "value": n => { userExperienceAnalyticsBaselineCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsBaseline>(createUserExperienceAnalyticsBaselineFromDiscriminatorValue); },
    }
}
