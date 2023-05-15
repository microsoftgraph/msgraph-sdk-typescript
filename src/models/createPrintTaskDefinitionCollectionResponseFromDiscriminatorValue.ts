import {deserializeIntoPrintTaskDefinitionCollectionResponse} from './deserializeIntoPrintTaskDefinitionCollectionResponse';
import {PrintTaskDefinitionCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTaskDefinitionCollectionResponse;
}
