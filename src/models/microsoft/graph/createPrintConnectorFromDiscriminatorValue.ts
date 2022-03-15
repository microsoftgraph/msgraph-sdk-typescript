import {PrintConnector} from './printConnector';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintConnector {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintConnector();
}
