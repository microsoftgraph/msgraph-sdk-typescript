import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice';
import {UserExperienceAnalyticsWorkFromAnywhereDevice} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice;
}
