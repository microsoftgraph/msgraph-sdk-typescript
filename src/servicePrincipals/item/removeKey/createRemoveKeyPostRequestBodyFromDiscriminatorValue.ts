import {RemoveKeyPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRemoveKeyPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : RemoveKeyPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RemoveKeyPostRequestBody();
}
