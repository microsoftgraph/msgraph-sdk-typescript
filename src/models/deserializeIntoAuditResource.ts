import {AuditProperty} from './auditProperty';
import {AuditResource} from './auditResource';
import {createAuditPropertyFromDiscriminatorValue} from './createAuditPropertyFromDiscriminatorValue';
import {serializeAuditProperty} from './serializeAuditProperty';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAuditResource(auditResource: AuditResource | undefined = {} as AuditResource) : Record<string, (node: ParseNode) => void> {
    return {
        "auditResourceType": n => { auditResource.auditResourceType = n.getStringValue(); },
        "displayName": n => { auditResource.displayName = n.getStringValue(); },
        "modifiedProperties": n => { auditResource.modifiedProperties = n.getCollectionOfObjectValues<AuditProperty>(createAuditPropertyFromDiscriminatorValue); },
        "@odata.type": n => { auditResource.odataType = n.getStringValue(); },
        "resourceId": n => { auditResource.resourceId = n.getStringValue(); },
    }
}
