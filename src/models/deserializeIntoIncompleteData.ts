import { type IncompleteData } from './incompleteData';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoIncompleteData(incompleteData: IncompleteData | undefined = {} as IncompleteData) : Record<string, (node: ParseNode) => void> {
    return {
        "missingDataBeforeDateTime": n => { incompleteData.missingDataBeforeDateTime = n.getDateValue(); },
        "@odata.type": n => { incompleteData.odataType = n.getStringValue(); },
        "wasThrottled": n => { incompleteData.wasThrottled = n.getBooleanValue(); },
    }
}
