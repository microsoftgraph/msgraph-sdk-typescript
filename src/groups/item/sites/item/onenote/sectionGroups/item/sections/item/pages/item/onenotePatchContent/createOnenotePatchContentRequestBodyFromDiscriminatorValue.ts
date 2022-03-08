import {OnenotePatchContentRequestBody} from './onenotePatchContentRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePatchContentRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePatchContentRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePatchContentRequestBody();
}
