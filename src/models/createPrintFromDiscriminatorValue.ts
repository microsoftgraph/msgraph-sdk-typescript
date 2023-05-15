import {deserializeIntoPrint} from './deserializeIntoPrint';
import {Print} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrint;
}
