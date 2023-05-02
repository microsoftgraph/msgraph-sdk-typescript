import {deserializeIntoPrintConnector} from './deserializeIntoPrintConnector';
import {PrintConnector} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintConnector;
}
