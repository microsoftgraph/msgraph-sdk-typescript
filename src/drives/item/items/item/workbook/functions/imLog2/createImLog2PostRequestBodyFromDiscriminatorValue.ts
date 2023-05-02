import {deserializeIntoImLog2PostRequestBody} from './deserializeIntoImLog2PostRequestBody';
import {ImLog2PostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImLog2PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoImLog2PostRequestBody;
}
