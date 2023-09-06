import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsDeviceScores } from './serializeUserExperienceAnalyticsDeviceScores';
import { type UserExperienceAnalyticsDeviceScores } from './userExperienceAnalyticsDeviceScores';
import { type UserExperienceAnalyticsDeviceScoresCollectionResponse } from './userExperienceAnalyticsDeviceScoresCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsDeviceScoresCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsDeviceScoresCollectionResponse: UserExperienceAnalyticsDeviceScoresCollectionResponse | undefined = {} as UserExperienceAnalyticsDeviceScoresCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsDeviceScoresCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsDeviceScores>("value", userExperienceAnalyticsDeviceScoresCollectionResponse.value, serializeUserExperienceAnalyticsDeviceScores);
}
