import { deserializeIntoEdiscoveryExportOperation } from './deserializeIntoEdiscoveryExportOperation';
import { type EdiscoveryExportOperation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryExportOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryExportOperation;
}
