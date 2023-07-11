import {deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse} from './deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse';
import {UserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsWorkFromAnywhereDeviceCollectionResponse;
}
