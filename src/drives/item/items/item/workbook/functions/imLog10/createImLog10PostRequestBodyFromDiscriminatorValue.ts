import {deserializeIntoImLog10PostRequestBody} from './deserializeIntoImLog10PostRequestBody';
import {ImLog10PostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImLog10PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImLog10PostRequestBody;
}
