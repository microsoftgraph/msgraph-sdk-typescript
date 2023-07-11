import {createUserExperienceAnalyticsModelScoresFromDiscriminatorValue} from './createUserExperienceAnalyticsModelScoresFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsModelScores} from './serializeUserExperienceAnalyticsModelScores';
import {UserExperienceAnalyticsModelScores} from './userExperienceAnalyticsModelScores';
import {UserExperienceAnalyticsModelScoresCollectionResponse} from './userExperienceAnalyticsModelScoresCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsModelScoresCollectionResponse(userExperienceAnalyticsModelScoresCollectionResponse: UserExperienceAnalyticsModelScoresCollectionResponse | undefined = {} as UserExperienceAnalyticsModelScoresCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsModelScoresCollectionResponse),
        "value": n => { userExperienceAnalyticsModelScoresCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsModelScores>(createUserExperienceAnalyticsModelScoresFromDiscriminatorValue); },
    }
}
