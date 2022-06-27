import {ClientUserAgentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClientUserAgentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClientUserAgentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClientUserAgentImpl();
}
