import { deserializeIntoPrintTaskDefinition } from './deserializeIntoPrintTaskDefinition';
import { type PrintTaskDefinition } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintTaskDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTaskDefinition;
}
