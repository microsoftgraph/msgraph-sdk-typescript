import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsModelScores} from './serializeUserExperienceAnalyticsModelScores';
import {UserExperienceAnalyticsModelScores} from './userExperienceAnalyticsModelScores';
import {UserExperienceAnalyticsModelScoresCollectionResponse} from './userExperienceAnalyticsModelScoresCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsModelScoresCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsModelScoresCollectionResponse: UserExperienceAnalyticsModelScoresCollectionResponse | undefined = {} as UserExperienceAnalyticsModelScoresCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsModelScoresCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsModelScores>("value", userExperienceAnalyticsModelScoresCollectionResponse.value, serializeUserExperienceAnalyticsModelScores);
}
