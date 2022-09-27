import {FileSecurityStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createFileSecurityStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : FileSecurityStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new FileSecurityStateCollectionResponse();
}
