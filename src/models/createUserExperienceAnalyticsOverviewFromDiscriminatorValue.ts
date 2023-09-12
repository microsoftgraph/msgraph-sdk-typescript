import { deserializeIntoUserExperienceAnalyticsOverview } from './deserializeIntoUserExperienceAnalyticsOverview';
import { type UserExperienceAnalyticsOverview } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsOverview;
}
