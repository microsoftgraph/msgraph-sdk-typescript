import { deserializeIntoDomainCollectionResponse } from './deserializeIntoDomainCollectionResponse';
import { type DomainCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createDomainCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoDomainCollectionResponse;
}
