import {OnenotePatchContentPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePatchContentPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePatchContentPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePatchContentPostRequestBody();
}
