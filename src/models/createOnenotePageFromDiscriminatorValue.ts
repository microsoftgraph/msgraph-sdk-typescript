import {OnenotePageImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenotePageFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenotePageImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenotePageImpl();
}
