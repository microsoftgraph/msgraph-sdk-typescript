import {ServiceUserAgentImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createServiceUserAgentFromDiscriminatorValue(parseNode: ParseNode | undefined) : ServiceUserAgentImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new ServiceUserAgentImpl();
}
