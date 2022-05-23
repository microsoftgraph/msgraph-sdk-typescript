import {UnarchivePostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnarchivePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnarchivePostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnarchivePostRequestBodyImpl();
}
