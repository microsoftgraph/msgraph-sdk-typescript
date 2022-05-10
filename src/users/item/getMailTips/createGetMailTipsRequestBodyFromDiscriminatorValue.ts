import {GetMailTipsRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetMailTipsRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetMailTipsRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetMailTipsRequestBodyImpl();
}
