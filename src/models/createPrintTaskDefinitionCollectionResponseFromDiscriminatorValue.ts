import { deserializeIntoPrintTaskDefinitionCollectionResponse } from './deserializeIntoPrintTaskDefinitionCollectionResponse';
import { type PrintTaskDefinitionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintTaskDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTaskDefinitionCollectionResponse;
}
