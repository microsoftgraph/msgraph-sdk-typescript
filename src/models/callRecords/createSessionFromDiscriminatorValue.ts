import {SessionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createSessionFromDiscriminatorValue(parseNode: ParseNode | undefined) : SessionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new SessionImpl();
}
