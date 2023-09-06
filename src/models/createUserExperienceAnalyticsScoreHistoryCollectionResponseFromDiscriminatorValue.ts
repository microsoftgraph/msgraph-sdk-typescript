import { deserializeIntoUserExperienceAnalyticsScoreHistoryCollectionResponse } from './deserializeIntoUserExperienceAnalyticsScoreHistoryCollectionResponse';
import { type UserExperienceAnalyticsScoreHistoryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsScoreHistoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsScoreHistoryCollectionResponse;
}
