import {DeclineRequestBody} from './declineRequestBody';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDeclineRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : DeclineRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DeclineRequestBody();
}
