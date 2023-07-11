import {deserializeIntoEdiscoveryExportOperation} from './deserializeIntoEdiscoveryExportOperation';
import {EdiscoveryExportOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryExportOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryExportOperation;
}
