import { serializeEntity } from './serializeEntity';
import { type UserExperienceAnalyticsScoreHistory } from './userExperienceAnalyticsScoreHistory';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeUserExperienceAnalyticsScoreHistory(writer: SerializationWriter, userExperienceAnalyticsScoreHistory: UserExperienceAnalyticsScoreHistory | undefined = {} as UserExperienceAnalyticsScoreHistory) : void {
        serializeEntity(writer, userExperienceAnalyticsScoreHistory)
        writer.writeDateValue("startupDateTime", userExperienceAnalyticsScoreHistory.startupDateTime);
}
