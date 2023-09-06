import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeUserExperienceAnalyticsModelScores } from './serializeUserExperienceAnalyticsModelScores';
import { type UserExperienceAnalyticsModelScores } from './userExperienceAnalyticsModelScores';
import { type UserExperienceAnalyticsModelScoresCollectionResponse } from './userExperienceAnalyticsModelScoresCollectionResponse';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsModelScoresCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsModelScoresCollectionResponse: UserExperienceAnalyticsModelScoresCollectionResponse | undefined = {} as UserExperienceAnalyticsModelScoresCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsModelScoresCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsModelScores>("value", userExperienceAnalyticsModelScoresCollectionResponse.value, serializeUserExperienceAnalyticsModelScores);
}
