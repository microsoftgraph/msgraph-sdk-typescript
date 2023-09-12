import { deserializeIntoVppTokenCollectionResponse } from './deserializeIntoVppTokenCollectionResponse';
import { type VppTokenCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createVppTokenCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoVppTokenCollectionResponse;
}
