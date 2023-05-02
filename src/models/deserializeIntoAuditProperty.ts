import {AuditProperty} from './auditProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditProperty(auditProperty: AuditProperty | undefined = {} as AuditProperty) : Record<string, (node: ParseNode) => void> {
    return {
        "displayName": n => { auditProperty.displayName = n.getStringValue(); },
        "newValue": n => { auditProperty.newValue = n.getStringValue(); },
        "@odata.type": n => { auditProperty.odataType = n.getStringValue(); },
        "oldValue": n => { auditProperty.oldValue = n.getStringValue(); },
    }
}
