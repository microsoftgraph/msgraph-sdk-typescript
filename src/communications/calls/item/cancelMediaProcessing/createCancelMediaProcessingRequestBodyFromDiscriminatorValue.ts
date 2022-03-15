import {CancelMediaProcessingRequestBody} from './cancelMediaProcessingRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCancelMediaProcessingRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CancelMediaProcessingRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CancelMediaProcessingRequestBody();
}
