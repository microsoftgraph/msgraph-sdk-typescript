import {UnarchiveResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnarchiveResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnarchiveResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnarchiveResponseImpl();
}
