import {deserializeIntoUserExperienceAnalyticsOverview} from './deserializeIntoUserExperienceAnalyticsOverview';
import {UserExperienceAnalyticsOverview} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsOverviewFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsOverview;
}
