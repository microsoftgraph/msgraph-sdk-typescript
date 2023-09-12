import { deserializeIntoPrintServiceEndpointCollectionResponse } from './deserializeIntoPrintServiceEndpointCollectionResponse';
import { type PrintServiceEndpointCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintServiceEndpointCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintServiceEndpointCollectionResponse;
}
