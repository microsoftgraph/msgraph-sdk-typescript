import {AddCopyRequestBody} from './addCopyRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddCopyRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddCopyRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddCopyRequestBody();
}
