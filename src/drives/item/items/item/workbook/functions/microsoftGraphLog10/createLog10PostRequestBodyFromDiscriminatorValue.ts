import {Log10PostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createLog10PostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : Log10PostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Log10PostRequestBody();
}
