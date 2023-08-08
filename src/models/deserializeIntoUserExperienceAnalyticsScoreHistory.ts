import {deserializeIntoEntity} from './deserializeIntoEntity';
import type {UserExperienceAnalyticsScoreHistory} from './userExperienceAnalyticsScoreHistory';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoUserExperienceAnalyticsScoreHistory(userExperienceAnalyticsScoreHistory: UserExperienceAnalyticsScoreHistory | undefined = {} as UserExperienceAnalyticsScoreHistory) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(userExperienceAnalyticsScoreHistory),
        "startupDateTime": n => { userExperienceAnalyticsScoreHistory.startupDateTime = n.getDateValue(); },
    }
}
