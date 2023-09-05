import { deserializeIntoPrintTaskTriggerCollectionResponse } from './deserializeIntoPrintTaskTriggerCollectionResponse';
import { type PrintTaskTriggerCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintTaskTriggerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTaskTriggerCollectionResponse;
}
