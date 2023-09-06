import { deserializeIntoConnectionOperation } from './deserializeIntoConnectionOperation';
import { type ConnectionOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createConnectionOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoConnectionOperation;
}
