import {PrintConnectorImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintConnectorFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintConnectorImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintConnectorImpl();
}
