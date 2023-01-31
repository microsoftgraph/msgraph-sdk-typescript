import {ImLog2PostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImLog2PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImLog2PostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImLog2PostRequestBody();
}
