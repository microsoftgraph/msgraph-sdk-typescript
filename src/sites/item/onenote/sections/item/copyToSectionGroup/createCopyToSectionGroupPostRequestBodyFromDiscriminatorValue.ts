import {deserializeIntoCopyToSectionGroupPostRequestBody} from './deserializeIntoCopyToSectionGroupPostRequestBody';
import {CopyToSectionGroupPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToSectionGroupPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyToSectionGroupPostRequestBody;
}
