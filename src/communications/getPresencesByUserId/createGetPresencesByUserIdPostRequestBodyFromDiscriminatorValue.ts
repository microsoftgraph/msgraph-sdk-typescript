import {GetPresencesByUserIdPostRequestBody} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPresencesByUserIdPostRequestBody {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPresencesByUserIdPostRequestBody();
}
