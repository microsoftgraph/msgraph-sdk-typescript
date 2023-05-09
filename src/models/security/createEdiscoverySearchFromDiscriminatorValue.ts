import {deserializeIntoEdiscoverySearch} from './deserializeIntoEdiscoverySearch';
import {EdiscoverySearch} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoverySearchFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoverySearch;
}
