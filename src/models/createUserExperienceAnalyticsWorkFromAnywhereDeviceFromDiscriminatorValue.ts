import { deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice } from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice';
import { type UserExperienceAnalyticsWorkFromAnywhereDevice } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereDeviceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDevice;
}
