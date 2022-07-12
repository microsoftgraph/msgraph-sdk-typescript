import {ServiceUserAgent} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUserAgentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceUserAgent {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceUserAgent();
}
