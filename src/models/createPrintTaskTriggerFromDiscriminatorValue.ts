import { deserializeIntoPrintTaskTrigger } from './deserializeIntoPrintTaskTrigger';
import { type PrintTaskTrigger } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintTaskTriggerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTaskTrigger;
}
