import { deserializeIntoPrintTask } from './deserializeIntoPrintTask';
import { type PrintTask } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createPrintTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTask;
}
