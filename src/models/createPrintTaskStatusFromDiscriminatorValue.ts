import {deserializeIntoPrintTaskStatus} from './deserializeIntoPrintTaskStatus';
import {PrintTaskStatus} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskStatusFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTaskStatus;
}
