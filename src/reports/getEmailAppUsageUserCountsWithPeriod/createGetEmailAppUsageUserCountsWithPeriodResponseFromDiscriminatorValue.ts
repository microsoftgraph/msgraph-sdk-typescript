import {GetEmailAppUsageUserCountsWithPeriodResponse} from './getEmailAppUsageUserCountsWithPeriodResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailAppUsageUserCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailAppUsageUserCountsWithPeriodResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailAppUsageUserCountsWithPeriodResponse();
}
