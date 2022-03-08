import {GetEmailAppUsageUserDetailWithPeriodResponse} from './getEmailAppUsageUserDetailWithPeriodResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailAppUsageUserDetailWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailAppUsageUserDetailWithPeriodResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailAppUsageUserDetailWithPeriodResponse();
}
