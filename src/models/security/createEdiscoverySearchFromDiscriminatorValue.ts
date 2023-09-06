import { deserializeIntoEdiscoverySearch } from './deserializeIntoEdiscoverySearch';
import { type EdiscoverySearch } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoverySearchFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoverySearch;
}
