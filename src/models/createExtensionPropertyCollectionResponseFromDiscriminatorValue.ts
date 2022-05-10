import {ExtensionPropertyCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createExtensionPropertyCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : ExtensionPropertyCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ExtensionPropertyCollectionResponseImpl();
}
