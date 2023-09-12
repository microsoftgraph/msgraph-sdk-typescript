import { deserializeIntoUserExperienceAnalyticsDeviceStartupProcessCollectionResponse } from './deserializeIntoUserExperienceAnalyticsDeviceStartupProcessCollectionResponse';
import { type UserExperienceAnalyticsDeviceStartupProcessCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDeviceStartupProcessCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDeviceStartupProcessCollectionResponse;
}
