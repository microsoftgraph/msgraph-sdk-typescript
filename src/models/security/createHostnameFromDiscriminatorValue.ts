import { deserializeIntoHostname } from './deserializeIntoHostname';
import { type Hostname } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createHostnameFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoHostname;
}
