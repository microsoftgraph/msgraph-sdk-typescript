import {deserializeIntoEntity} from './deserializeIntoEntity';
import {TelecomExpenseManagementPartner} from './telecomExpenseManagementPartner';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTelecomExpenseManagementPartner(telecomExpenseManagementPartner: TelecomExpenseManagementPartner | undefined = {} as TelecomExpenseManagementPartner) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(telecomExpenseManagementPartner),
        "appAuthorized": n => { telecomExpenseManagementPartner.appAuthorized = n.getBooleanValue(); },
        "displayName": n => { telecomExpenseManagementPartner.displayName = n.getStringValue(); },
        "enabled": n => { telecomExpenseManagementPartner.enabled = n.getBooleanValue(); },
        "lastConnectionDateTime": n => { telecomExpenseManagementPartner.lastConnectionDateTime = n.getDateValue(); },
        "url": n => { telecomExpenseManagementPartner.url = n.getStringValue(); },
    }
}
