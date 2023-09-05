import { deserializeIntoUserExperienceAnalyticsCategory } from './deserializeIntoUserExperienceAnalyticsCategory';
import { type UserExperienceAnalyticsCategory } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsCategory;
}
