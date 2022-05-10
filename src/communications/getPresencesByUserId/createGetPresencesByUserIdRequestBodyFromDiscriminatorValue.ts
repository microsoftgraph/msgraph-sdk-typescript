import {GetPresencesByUserIdRequestBodyImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createGetPresencesByUserIdRequestBodyFromDiscriminatorValue(parseNode: ParseNode | undefined) : GetPresencesByUserIdRequestBodyImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new GetPresencesByUserIdRequestBodyImpl();
}
