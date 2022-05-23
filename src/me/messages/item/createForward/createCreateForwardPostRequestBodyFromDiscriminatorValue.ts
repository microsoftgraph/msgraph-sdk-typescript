import {CreateForwardPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCreateForwardPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CreateForwardPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CreateForwardPostRequestBodyImpl();
}
