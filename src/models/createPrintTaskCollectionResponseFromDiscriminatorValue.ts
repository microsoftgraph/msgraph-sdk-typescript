import { deserializeIntoPrintTaskCollectionResponse } from './deserializeIntoPrintTaskCollectionResponse';
import { type PrintTaskCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintTaskCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTaskCollectionResponse;
}
