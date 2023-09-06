import { deserializeIntoServiceUserAgent } from './deserializeIntoServiceUserAgent';
import { type ServiceUserAgent } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createServiceUserAgentFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoServiceUserAgent;
}
