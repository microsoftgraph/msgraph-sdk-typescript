import { deserializeIntoRiskyUserCollectionResponse } from './deserializeIntoRiskyUserCollectionResponse';
import { type RiskyUserCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRiskyUserCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskyUserCollectionResponse;
}
