import {deserializeIntoPrintTask} from './deserializeIntoPrintTask';
import {PrintTask} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTask;
}
