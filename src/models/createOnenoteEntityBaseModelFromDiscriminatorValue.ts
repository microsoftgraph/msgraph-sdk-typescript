import {OnenoteEntityBaseModelImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createOnenoteEntityBaseModelFromDiscriminatorValue(parseNode: ParseNode | undefined) : OnenoteEntityBaseModelImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new OnenoteEntityBaseModelImpl();
}
