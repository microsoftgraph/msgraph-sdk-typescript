import {DirectRoutingLogRowImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDirectRoutingLogRowFromDiscriminatorValue(parseNode: ParseNode | undefined) : DirectRoutingLogRowImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new DirectRoutingLogRowImpl();
}
