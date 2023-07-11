import {createUserExperienceAnalyticsScoreHistoryFromDiscriminatorValue} from './createUserExperienceAnalyticsScoreHistoryFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsScoreHistory} from './serializeUserExperienceAnalyticsScoreHistory';
import {UserExperienceAnalyticsScoreHistory} from './userExperienceAnalyticsScoreHistory';
import {UserExperienceAnalyticsScoreHistoryCollectionResponse} from './userExperienceAnalyticsScoreHistoryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsScoreHistoryCollectionResponse(userExperienceAnalyticsScoreHistoryCollectionResponse: UserExperienceAnalyticsScoreHistoryCollectionResponse | undefined = {} as UserExperienceAnalyticsScoreHistoryCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsScoreHistoryCollectionResponse),
        "value": n => { userExperienceAnalyticsScoreHistoryCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsScoreHistory>(createUserExperienceAnalyticsScoreHistoryFromDiscriminatorValue); },
    }
}
