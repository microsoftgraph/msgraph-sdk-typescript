import {OnenotePatchContentPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePatchContentPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePatchContentPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePatchContentPostRequestBodyImpl();
}
