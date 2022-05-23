import {PrintTaskDefinitionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : PrintTaskDefinitionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new PrintTaskDefinitionImpl();
}
