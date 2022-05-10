import {GetEmailAppUsageAppsUserCountsWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailAppUsageAppsUserCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailAppUsageAppsUserCountsWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailAppUsageAppsUserCountsWithPeriodResponseImpl();
}
