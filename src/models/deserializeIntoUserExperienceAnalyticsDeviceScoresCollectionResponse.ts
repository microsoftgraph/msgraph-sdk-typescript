import {createUserExperienceAnalyticsDeviceScoresFromDiscriminatorValue} from './createUserExperienceAnalyticsDeviceScoresFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsDeviceScores} from './serializeUserExperienceAnalyticsDeviceScores';
import {UserExperienceAnalyticsDeviceScores} from './userExperienceAnalyticsDeviceScores';
import {UserExperienceAnalyticsDeviceScoresCollectionResponse} from './userExperienceAnalyticsDeviceScoresCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsDeviceScoresCollectionResponse(userExperienceAnalyticsDeviceScoresCollectionResponse: UserExperienceAnalyticsDeviceScoresCollectionResponse | undefined = {} as UserExperienceAnalyticsDeviceScoresCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(userExperienceAnalyticsDeviceScoresCollectionResponse),
        "value": n => { userExperienceAnalyticsDeviceScoresCollectionResponse.value = n.getCollectionOfObjectValues<UserExperienceAnalyticsDeviceScores>(createUserExperienceAnalyticsDeviceScoresFromDiscriminatorValue); },
    }
}
