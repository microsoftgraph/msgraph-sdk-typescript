import {deserializeIntoUserExperienceAnalyticsCategory} from './deserializeIntoUserExperienceAnalyticsCategory';
import {UserExperienceAnalyticsCategory} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsCategoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsCategory;
}
