import {GetPresencesByUserIdResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPresencesByUserIdResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPresencesByUserIdResponseImpl();
}
