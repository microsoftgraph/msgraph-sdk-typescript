import {AddPasswordPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddPasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddPasswordPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddPasswordPostRequestBody();
}
