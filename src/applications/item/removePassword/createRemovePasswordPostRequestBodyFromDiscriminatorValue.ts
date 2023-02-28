import {RemovePasswordPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemovePasswordPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemovePasswordPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemovePasswordPostRequestBody();
}
