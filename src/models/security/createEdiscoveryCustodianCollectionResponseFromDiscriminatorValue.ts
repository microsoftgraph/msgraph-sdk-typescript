import {deserializeIntoEdiscoveryCustodianCollectionResponse} from './deserializeIntoEdiscoveryCustodianCollectionResponse';
import {EdiscoveryCustodianCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryCustodianCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryCustodianCollectionResponse;
}
