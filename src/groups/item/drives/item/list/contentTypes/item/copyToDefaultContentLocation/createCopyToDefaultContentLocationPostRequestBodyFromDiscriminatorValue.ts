import {CopyToDefaultContentLocationPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToDefaultContentLocationPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToDefaultContentLocationPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToDefaultContentLocationPostRequestBody();
}
