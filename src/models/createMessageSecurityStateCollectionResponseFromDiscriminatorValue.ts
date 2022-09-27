import {MessageSecurityStateCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createMessageSecurityStateCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : MessageSecurityStateCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new MessageSecurityStateCollectionResponse();
}
