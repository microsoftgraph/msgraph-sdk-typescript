import {OnenotePatchContentMember1} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePatchContentMember1FromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePatchContentMember1 {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePatchContentMember1();
}
