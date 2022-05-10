import {OnenoteImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteImpl();
}
