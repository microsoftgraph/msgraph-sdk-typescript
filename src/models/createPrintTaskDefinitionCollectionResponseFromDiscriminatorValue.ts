import {PrintTaskDefinitionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskDefinitionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintTaskDefinitionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintTaskDefinitionCollectionResponseImpl();
}
