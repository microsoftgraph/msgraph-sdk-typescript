import {deserializeIntoPrintConnectorCollectionResponse} from './deserializeIntoPrintConnectorCollectionResponse';
import {PrintConnectorCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintConnectorCollectionResponse;
}
