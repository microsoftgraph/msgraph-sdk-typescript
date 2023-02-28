import {UnarchivePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUnarchivePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : UnarchivePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new UnarchivePostRequestBody();
}
