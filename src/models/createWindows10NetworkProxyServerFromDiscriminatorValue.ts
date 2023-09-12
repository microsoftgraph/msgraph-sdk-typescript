import { deserializeIntoWindows10NetworkProxyServer } from './deserializeIntoWindows10NetworkProxyServer';
import { type Windows10NetworkProxyServer } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createWindows10NetworkProxyServerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10NetworkProxyServer;
}
