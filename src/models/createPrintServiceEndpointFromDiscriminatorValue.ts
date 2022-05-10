import {PrintServiceEndpointImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintServiceEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintServiceEndpointImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintServiceEndpointImpl();
}
