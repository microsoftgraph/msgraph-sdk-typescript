import { deserializeIntoUserExperienceAnalyticsInsight } from './deserializeIntoUserExperienceAnalyticsInsight';
import { type UserExperienceAnalyticsInsight } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsInsight;
}
