import {CancelMediaProcessingPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelMediaProcessingPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CancelMediaProcessingPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CancelMediaProcessingPostRequestBodyImpl();
}
