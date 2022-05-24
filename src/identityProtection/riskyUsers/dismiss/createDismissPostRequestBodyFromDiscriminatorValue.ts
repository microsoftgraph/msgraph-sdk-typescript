import {DismissPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDismissPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DismissPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DismissPostRequestBodyImpl();
}
