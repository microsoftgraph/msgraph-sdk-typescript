import {deserializeIntoUserExperienceAnalyticsSettings} from './deserializeIntoUserExperienceAnalyticsSettings';
import {UserExperienceAnalyticsSettings} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsSettings;
}
