import { deserializeIntoUserExperienceAnalyticsModelScoresCollectionResponse } from './deserializeIntoUserExperienceAnalyticsModelScoresCollectionResponse';
import { type UserExperienceAnalyticsModelScoresCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsModelScoresCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsModelScoresCollectionResponse;
}
