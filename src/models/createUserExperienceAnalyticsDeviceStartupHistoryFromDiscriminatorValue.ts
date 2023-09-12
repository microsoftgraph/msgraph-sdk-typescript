import { deserializeIntoUserExperienceAnalyticsDeviceStartupHistory } from './deserializeIntoUserExperienceAnalyticsDeviceStartupHistory';
import { type UserExperienceAnalyticsDeviceStartupHistory } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsDeviceStartupHistoryFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoUserExperienceAnalyticsDeviceStartupHistory;
}
