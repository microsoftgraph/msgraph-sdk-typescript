import {deserializeIntoUserExperienceAnalyticsBaseline} from './deserializeIntoUserExperienceAnalyticsBaseline';
import {UserExperienceAnalyticsBaseline} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsBaselineFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsBaseline;
}
