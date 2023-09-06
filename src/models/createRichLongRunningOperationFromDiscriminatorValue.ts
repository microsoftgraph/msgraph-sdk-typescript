import { deserializeIntoRichLongRunningOperation } from './deserializeIntoRichLongRunningOperation';
import { type RichLongRunningOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRichLongRunningOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRichLongRunningOperation;
}
