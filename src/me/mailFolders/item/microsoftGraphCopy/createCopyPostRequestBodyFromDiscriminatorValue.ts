import {CopyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyPostRequestBody();
}
