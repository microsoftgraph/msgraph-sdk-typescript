import { deserializeIntoUserExperienceAnalyticsDeviceStartupHistoryCollectionResponse } from './deserializeIntoUserExperienceAnalyticsDeviceStartupHistoryCollectionResponse';
import { type UserExperienceAnalyticsDeviceStartupHistoryCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDeviceStartupHistoryCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDeviceStartupHistoryCollectionResponse;
}
