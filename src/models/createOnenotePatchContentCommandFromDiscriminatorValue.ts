import {OnenotePatchContentCommandImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePatchContentCommandFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePatchContentCommandImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePatchContentCommandImpl();
}
