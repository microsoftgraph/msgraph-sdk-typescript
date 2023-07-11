import {deserializeIntoUserExperienceAnalyticsDeviceStartupProcessCollectionResponse} from './deserializeIntoUserExperienceAnalyticsDeviceStartupProcessCollectionResponse';
import {UserExperienceAnalyticsDeviceStartupProcessCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDeviceStartupProcessCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDeviceStartupProcessCollectionResponse;
}
