import {deserializeIntoUserExperienceAnalyticsInsight} from './deserializeIntoUserExperienceAnalyticsInsight';
import {UserExperienceAnalyticsInsight} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsInsightFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsInsight;
}
