import {deserializeIntoCopyToSectionPostRequestBody} from './deserializeIntoCopyToSectionPostRequestBody';
import {CopyToSectionPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCopyToSectionPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoCopyToSectionPostRequestBody;
}
