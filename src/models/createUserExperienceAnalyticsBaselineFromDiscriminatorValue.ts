import { deserializeIntoUserExperienceAnalyticsBaseline } from './deserializeIntoUserExperienceAnalyticsBaseline';
import { type UserExperienceAnalyticsBaseline } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsBaselineFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsBaseline;
}
