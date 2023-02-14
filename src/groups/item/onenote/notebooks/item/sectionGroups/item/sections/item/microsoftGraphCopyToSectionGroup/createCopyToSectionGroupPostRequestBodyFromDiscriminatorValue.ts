import {CopyToSectionGroupPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToSectionGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : CopyToSectionGroupPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new CopyToSectionGroupPostRequestBody();
}
