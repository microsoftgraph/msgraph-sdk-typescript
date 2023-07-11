import {createUserExperienceAnalyticsCategoryFromDiscriminatorValue} from './createUserExperienceAnalyticsCategoryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsCategory} from './serializeUserExperienceAnalyticsCategory';
import {UserExperienceAnalyticsCategory} from './userExperienceAnalyticsCategory';
import {UserExperienceAnalyticsCategoryCollectionResponse} from './userExperienceAnalyticsCategoryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsCategoryCollectionResponse(userExperienceAnalyticsCategoryCollectionResponse: UserExperienceAnalyticsCategoryCollectionResponse | undefined = {} as UserExperienceAnalyticsCategoryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsCategoryCollectionResponse),
        "value": n => { userExperienceAnalyticsCategoryCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsCategory>(createUserExperienceAnalyticsCategoryFromDiscriminatorValue); },
    }
}
