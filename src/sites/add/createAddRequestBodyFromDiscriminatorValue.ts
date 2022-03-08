import {AddRequestBody} from './addRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddRequestBody();
}
