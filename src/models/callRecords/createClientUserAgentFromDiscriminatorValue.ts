import {ClientUserAgent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createClientUserAgentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ClientUserAgent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ClientUserAgent();
}
