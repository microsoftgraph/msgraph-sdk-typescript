import { deserializeIntoPrintJobCollectionResponse } from './deserializeIntoPrintJobCollectionResponse';
import { type PrintJobCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintJobCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintJobCollectionResponse;
}
