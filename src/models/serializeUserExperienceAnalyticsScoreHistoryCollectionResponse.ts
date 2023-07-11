import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeUserExperienceAnalyticsScoreHistory} from './serializeUserExperienceAnalyticsScoreHistory';
import {UserExperienceAnalyticsScoreHistory} from './userExperienceAnalyticsScoreHistory';
import {UserExperienceAnalyticsScoreHistoryCollectionResponse} from './userExperienceAnalyticsScoreHistoryCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsScoreHistoryCollectionResponse(writer: SerializationWriter, userExperienceAnalyticsScoreHistoryCollectionResponse: UserExperienceAnalyticsScoreHistoryCollectionResponse | undefined = {} as UserExperienceAnalyticsScoreHistoryCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, userExperienceAnalyticsScoreHistoryCollectionResponse)
        writer.writeCollectionOfObjectValues<UserExperienceAnalyticsScoreHistory>("value", userExperienceAnalyticsScoreHistoryCollectionResponse.value, serializeUserExperienceAnalyticsScoreHistory);
}
