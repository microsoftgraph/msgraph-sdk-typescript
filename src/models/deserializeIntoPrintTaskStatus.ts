import {PrintTaskProcessingState} from './printTaskProcessingState';
import {PrintTaskStatus} from './printTaskStatus';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoPrintTaskStatus(printTaskStatus: PrintTaskStatus | undefined = {} as PrintTaskStatus) : Record<string, (node: ParseNode) => void> {
    return {
        "description": n => { printTaskStatus.description = n.getStringValue(); },
        "@odata.type": n => { printTaskStatus.odataType = n.getStringValue(); },
        "state": n => { printTaskStatus.state = n.getEnumValue<PrintTaskProcessingState>(PrintTaskProcessingState); },
    }
}
