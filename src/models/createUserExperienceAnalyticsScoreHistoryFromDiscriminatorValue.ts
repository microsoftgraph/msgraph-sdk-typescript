import { deserializeIntoUserExperienceAnalyticsScoreHistory } from './deserializeIntoUserExperienceAnalyticsScoreHistory';
import { type UserExperienceAnalyticsScoreHistory } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsScoreHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsScoreHistory;
}
