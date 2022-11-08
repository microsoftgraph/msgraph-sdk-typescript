import {HideForUserPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createHideForUserPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : HideForUserPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new HideForUserPostRequestBody();
}
