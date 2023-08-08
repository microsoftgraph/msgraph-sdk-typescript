import {createUserExperienceAnalyticsModelScoresFromDiscriminatorValue} from './createUserExperienceAnalyticsModelScoresFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsModelScores} from './serializeUserExperienceAnalyticsModelScores';
import type {UserExperienceAnalyticsModelScores} from './userExperienceAnalyticsModelScores';
import type {UserExperienceAnalyticsModelScoresCollectionResponse} from './userExperienceAnalyticsModelScoresCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsModelScoresCollectionResponse(userExperienceAnalyticsModelScoresCollectionResponse: UserExperienceAnalyticsModelScoresCollectionResponse | undefined = {} as UserExperienceAnalyticsModelScoresCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsModelScoresCollectionResponse),
        "value": n => { userExperienceAnalyticsModelScoresCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsModelScores>(createUserExperienceAnalyticsModelScoresFromDiscriminatorValue); },
    }
}
