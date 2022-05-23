import {DirectoryObjectCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectoryObjectCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectoryObjectCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectoryObjectCollectionResponseImpl();
}
