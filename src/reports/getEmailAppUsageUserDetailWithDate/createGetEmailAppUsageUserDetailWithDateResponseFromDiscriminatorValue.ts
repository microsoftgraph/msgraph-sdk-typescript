import {GetEmailAppUsageUserDetailWithDateResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetEmailAppUsageUserDetailWithDateResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetEmailAppUsageUserDetailWithDateResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetEmailAppUsageUserDetailWithDateResponseImpl();
}
