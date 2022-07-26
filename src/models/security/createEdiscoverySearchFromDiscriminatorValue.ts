import {EdiscoverySearch} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoverySearchFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoverySearch {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoverySearch();
}
