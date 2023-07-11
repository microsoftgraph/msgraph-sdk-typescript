import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsDeviceScores} from './serializeUserExperienceAnalyticsDeviceScores';
import {UserExperienceAnalyticsDeviceScores} from './userExperienceAnalyticsDeviceScores';
import {UserExperienceAnalyticsDeviceScoresCollectionResponse} from './userExperienceAnalyticsDeviceScoresCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDeviceScoresCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsDeviceScoresCollectionResponse: UserExperienceAnalyticsDeviceScoresCollectionResponse | undefined = {} as UserExperienceAnalyticsDeviceScoresCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsDeviceScoresCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDeviceScores>("value", userExperienceAnalyticsDeviceScoresCollectionResponse.value, serializeUserExperienceAnalyticsDeviceScores);
}
