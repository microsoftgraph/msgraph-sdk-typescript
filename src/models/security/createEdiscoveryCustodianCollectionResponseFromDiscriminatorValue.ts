import {EdiscoveryCustodianCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryCustodianCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryCustodianCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryCustodianCollectionResponse();
}
