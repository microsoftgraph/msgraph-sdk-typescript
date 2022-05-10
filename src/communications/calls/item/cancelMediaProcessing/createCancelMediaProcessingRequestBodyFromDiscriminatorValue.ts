import {CancelMediaProcessingRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelMediaProcessingRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CancelMediaProcessingRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CancelMediaProcessingRequestBodyImpl();
}
