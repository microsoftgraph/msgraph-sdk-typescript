import { deserializeIntoPrintTaskStatus } from './deserializeIntoPrintTaskStatus';
import { type PrintTaskStatus } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintTaskStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTaskStatus;
}
