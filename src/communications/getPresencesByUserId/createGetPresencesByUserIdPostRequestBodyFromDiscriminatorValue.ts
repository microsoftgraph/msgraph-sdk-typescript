import {GetPresencesByUserIdPostRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdPostRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPresencesByUserIdPostRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPresencesByUserIdPostRequestBodyImpl();
}
