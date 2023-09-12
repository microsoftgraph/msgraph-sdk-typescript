import { deserializeIntoPrintConnectorCollectionResponse } from './deserializeIntoPrintConnectorCollectionResponse';
import { type PrintConnectorCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintConnectorCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintConnectorCollectionResponse;
}
