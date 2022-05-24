import {ChangePasswordPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createChangePasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : ChangePasswordPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ChangePasswordPostRequestBodyImpl();
}
