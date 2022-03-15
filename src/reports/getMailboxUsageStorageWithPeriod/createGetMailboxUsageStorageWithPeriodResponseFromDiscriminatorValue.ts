import {GetMailboxUsageStorageWithPeriodResponse} from './getMailboxUsageStorageWithPeriodResponse';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailboxUsageStorageWithPeriodResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailboxUsageStorageWithPeriodResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailboxUsageStorageWithPeriodResponse();
}
