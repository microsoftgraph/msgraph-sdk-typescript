import {deserializeIntoLog10PostRequestBody} from './deserializeIntoLog10PostRequestBody';
import {Log10PostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLog10PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoLog10PostRequestBody;
}
