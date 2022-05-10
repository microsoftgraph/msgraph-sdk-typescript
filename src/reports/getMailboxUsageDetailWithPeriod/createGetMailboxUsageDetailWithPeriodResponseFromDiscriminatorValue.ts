import {GetMailboxUsageDetailWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailboxUsageDetailWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailboxUsageDetailWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailboxUsageDetailWithPeriodResponseImpl();
}
