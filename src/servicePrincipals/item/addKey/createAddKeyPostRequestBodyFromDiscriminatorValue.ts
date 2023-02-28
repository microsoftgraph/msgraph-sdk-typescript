import {AddKeyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createAddKeyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : AddKeyPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new AddKeyPostRequestBody();
}
