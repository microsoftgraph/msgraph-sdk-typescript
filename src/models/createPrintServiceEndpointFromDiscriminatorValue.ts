import {deserializeIntoPrintServiceEndpoint} from './deserializeIntoPrintServiceEndpoint';
import {PrintServiceEndpoint} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintServiceEndpointFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintServiceEndpoint;
}
