import {ImLog10PostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createImLog10PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ImLog10PostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ImLog10PostRequestBody();
}
