import {deserializeIntoCustomTaskExtensionCollectionResponse} from './deserializeIntoCustomTaskExtensionCollectionResponse';
import {CustomTaskExtensionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCustomTaskExtensionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCustomTaskExtensionCollectionResponse;
}
