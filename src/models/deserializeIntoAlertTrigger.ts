import { type AlertTrigger } from './alertTrigger';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAlertTrigger(alertTrigger: AlertTrigger | undefined = {} as AlertTrigger) : Record<string, (node: ParseNode) => void> {
    return {
        "name": n => { alertTrigger.name = n.getStringValue(); },
        "@odata.type": n => { alertTrigger.odataType = n.getStringValue(); },
        "type": n => { alertTrigger.type = n.getStringValue(); },
        "value": n => { alertTrigger.value = n.getStringValue(); },
    }
}
