import {deserializeIntoUserExperienceAnalyticsScoreHistory} from './deserializeIntoUserExperienceAnalyticsScoreHistory';
import {UserExperienceAnalyticsScoreHistory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsScoreHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsScoreHistory;
}
