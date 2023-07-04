import {deserializeIntoUserExperienceAnalyticsDeviceStartupHistoryCollectionResponse} from './deserializeIntoUserExperienceAnalyticsDeviceStartupHistoryCollectionResponse';
import {UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDeviceStartupHistoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDeviceStartupHistoryCollectionResponse;
}
