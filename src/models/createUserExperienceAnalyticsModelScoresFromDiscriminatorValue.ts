import {deserializeIntoUserExperienceAnalyticsModelScores} from './deserializeIntoUserExperienceAnalyticsModelScores';
import {UserExperienceAnalyticsModelScores} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsModelScoresFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsModelScores;
}
