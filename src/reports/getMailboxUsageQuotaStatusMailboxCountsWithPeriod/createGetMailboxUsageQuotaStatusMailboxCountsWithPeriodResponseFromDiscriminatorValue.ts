import {GetMailboxUsageQuotaStatusMailboxCountsWithPeriodResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailboxUsageQuotaStatusMailboxCountsWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailboxUsageQuotaStatusMailboxCountsWithPeriodResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailboxUsageQuotaStatusMailboxCountsWithPeriodResponseImpl();
}
