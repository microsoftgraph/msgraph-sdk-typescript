import { createUserExperienceAnalyticsCategoryFromDiscriminatorValue } from './createUserExperienceAnalyticsCategoryFromDiscriminatorValue';
import { deserializeIntoBaseCollectionPaginationCountResponse } from './deserializeIntoBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsCategory } from './serializeUserExperienceAnalyticsCategory';
import { type UserExperienceAnalyticsCategory } from './userExperienceAnalyticsCategory';
import { type UserExperienceAnalyticsCategoryCollectionResponse } from './userExperienceAnalyticsCategoryCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsCategoryCollectionResponse(userExperienceAnalyticsCategoryCollectionResponse: UserExperienceAnalyticsCategoryCollectionResponse | undefined = {} as UserExperienceAnalyticsCategoryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsCategoryCollectionResponse),
        "value": n => { userExperienceAnalyticsCategoryCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsCategory>(createUserExperienceAnalyticsCategoryFromDiscriminatorValue); },
    }
}
