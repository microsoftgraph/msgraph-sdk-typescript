import { type AlertDetection } from './alertDetection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertDetection(alertDetection: AlertDetection | undefined = {} as AlertDetection) : Record<string, (node: ParseNode) => void> {
    return {
        "detectionType": n => { alertDetection.detectionType = n.getStringValue(); },
        "method": n => { alertDetection.method = n.getStringValue(); },
        "name": n => { alertDetection.name = n.getStringValue(); },
        "@odata.type": n => { alertDetection.odataType = n.getStringValue(); },
    }
}
