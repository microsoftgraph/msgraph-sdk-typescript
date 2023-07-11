import {deserializeIntoUserExperienceAnalyticsScoreHistoryCollectionResponse} from './deserializeIntoUserExperienceAnalyticsScoreHistoryCollectionResponse';
import {UserExperienceAnalyticsScoreHistoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsScoreHistoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsScoreHistoryCollectionResponse;
}
