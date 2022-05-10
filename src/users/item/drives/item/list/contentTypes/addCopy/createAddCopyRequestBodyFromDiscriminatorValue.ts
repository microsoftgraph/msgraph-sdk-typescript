import {AddCopyRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddCopyRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddCopyRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddCopyRequestBodyImpl();
}
