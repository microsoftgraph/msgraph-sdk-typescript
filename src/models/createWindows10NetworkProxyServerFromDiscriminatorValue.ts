import {Windows10NetworkProxyServerImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10NetworkProxyServerFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10NetworkProxyServerImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10NetworkProxyServerImpl();
}
