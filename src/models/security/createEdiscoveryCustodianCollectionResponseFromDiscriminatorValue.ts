import { deserializeIntoEdiscoveryCustodianCollectionResponse } from './deserializeIntoEdiscoveryCustodianCollectionResponse';
import { type EdiscoveryCustodianCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryCustodianCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryCustodianCollectionResponse;
}
