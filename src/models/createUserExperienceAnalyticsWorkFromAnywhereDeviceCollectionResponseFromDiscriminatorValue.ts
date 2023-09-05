import { deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse } from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse';
import { type UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse;
}
