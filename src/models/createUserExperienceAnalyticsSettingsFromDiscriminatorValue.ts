import { deserializeIntoUserExperienceAnalyticsSettings } from './deserializeIntoUserExperienceAnalyticsSettings';
import { type UserExperienceAnalyticsSettings } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsSettingsFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsSettings;
}
