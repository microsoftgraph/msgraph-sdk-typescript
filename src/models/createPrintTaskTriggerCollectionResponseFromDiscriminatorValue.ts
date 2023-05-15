import {deserializeIntoPrintTaskTriggerCollectionResponse} from './deserializeIntoPrintTaskTriggerCollectionResponse';
import {PrintTaskTriggerCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createPrintTaskTriggerCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoPrintTaskTriggerCollectionResponse;
}
