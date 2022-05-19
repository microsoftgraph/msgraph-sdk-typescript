import {DeclinePostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeclinePostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeclinePostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeclinePostRequestBody();
}
