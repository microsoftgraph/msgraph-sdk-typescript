import {UnhideForUserPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnhideForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnhideForUserPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnhideForUserPostRequestBody();
}
