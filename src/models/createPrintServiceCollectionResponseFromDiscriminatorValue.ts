import { deserializeIntoPrintServiceCollectionResponse } from './deserializeIntoPrintServiceCollectionResponse';
import { type PrintServiceCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintServiceCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintServiceCollectionResponse;
}
