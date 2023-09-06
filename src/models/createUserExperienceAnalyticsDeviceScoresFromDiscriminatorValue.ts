import { deserializeIntoUserExperienceAnalyticsDeviceScores } from './deserializeIntoUserExperienceAnalyticsDeviceScores';
import { type UserExperienceAnalyticsDeviceScores } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDeviceScoresFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDeviceScores;
}
