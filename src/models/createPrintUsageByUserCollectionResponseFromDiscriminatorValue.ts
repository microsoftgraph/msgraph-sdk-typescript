import { deserializeIntoPrintUsageByUserCollectionResponse } from './deserializeIntoPrintUsageByUserCollectionResponse';
import { type PrintUsageByUserCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintUsageByUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintUsageByUserCollectionResponse;
}
