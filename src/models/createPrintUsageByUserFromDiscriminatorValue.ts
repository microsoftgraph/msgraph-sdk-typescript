import { deserializeIntoPrintUsageByUser } from './deserializeIntoPrintUsageByUser';
import { type PrintUsageByUser } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintUsageByUserFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintUsageByUser;
}
