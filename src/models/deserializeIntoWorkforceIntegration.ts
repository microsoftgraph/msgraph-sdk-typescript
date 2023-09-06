import { createWorkforceIntegrationEncryptionFromDiscriminatorValue } from './createWorkforceIntegrationEncryptionFromDiscriminatorValue';
import { deserializeIntoChangeTrackedEntity } from './deserializeIntoChangeTrackedEntity';
import { serializeWorkforceIntegrationEncryption } from './serializeWorkforceIntegrationEncryption';
import { type WorkforceIntegration } from './workforceIntegration';
import { type WorkforceIntegrationEncryption } from './workforceIntegrationEncryption';
import { WorkforceIntegrationSupportedEntities } from './workforceIntegrationSupportedEntities';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkforceIntegration(workforceIntegration: WorkforceIntegration | undefined = {} as WorkforceIntegration) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoChangeTrackedEntity(workforceIntegration),
        "apiVersion": n => { workforceIntegration.apiVersion = n.getNumberValue(); },
        "displayName": n => { workforceIntegration.displayName = n.getStringValue(); },
        "encryption": n => { workforceIntegration.encryption = n.getObjectValue<WorkforceIntegrationEncryption>(createWorkforceIntegrationEncryptionFromDiscriminatorValue); },
        "isActive": n => { workforceIntegration.isActive = n.getBooleanValue(); },
        "supportedEntities": n => { workforceIntegration.supportedEntities = n.getCollectionOfEnumValues<WorkforceIntegrationSupportedEntities>(WorkforceIntegrationSupportedEntities); },
        "url": n => { workforceIntegration.url = n.getStringValue(); },
    }
}
