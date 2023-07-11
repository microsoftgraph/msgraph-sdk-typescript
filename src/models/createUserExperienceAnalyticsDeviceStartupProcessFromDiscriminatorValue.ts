import {deserializeIntoUserExperienceAnalyticsDeviceStartupProcess} from './deserializeIntoUserExperienceAnalyticsDeviceStartupProcess';
import {UserExperienceAnalyticsDeviceStartupProcess} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDeviceStartupProcessFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDeviceStartupProcess;
}
