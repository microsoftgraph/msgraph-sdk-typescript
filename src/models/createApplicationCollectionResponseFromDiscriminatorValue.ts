import { deserializeIntoApplicationCollectionResponse } from './deserializeIntoApplicationCollectionResponse';
import { type ApplicationCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createApplicationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoApplicationCollectionResponse;
}
