import { deserializeIntoPrintServiceEndpoint } from './deserializeIntoPrintServiceEndpoint';
import { type PrintServiceEndpoint } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintServiceEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintServiceEndpoint;
}
