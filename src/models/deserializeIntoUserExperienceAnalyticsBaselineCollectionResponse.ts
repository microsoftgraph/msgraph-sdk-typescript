import {createUserExperienceAnalyticsBaselineFromDiscriminatorValue} from './createUserExperienceAnalyticsBaselineFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsBaseline} from './serializeUserExperienceAnalyticsBaseline';
import {UserExperienceAnalyticsBaseline} from './userExperienceAnalyticsBaseline';
import {UserExperienceAnalyticsBaselineCollectionResponse} from './userExperienceAnalyticsBaselineCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsBaselineCollectionResponse(userExperienceAnalyticsBaselineCollectionResponse: UserExperienceAnalyticsBaselineCollectionResponse | undefined = {} as UserExperienceAnalyticsBaselineCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsBaselineCollectionResponse),
        "value": n => { userExperienceAnalyticsBaselineCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsBaseline>(createUserExperienceAnalyticsBaselineFromDiscriminatorValue); },
    }
}
