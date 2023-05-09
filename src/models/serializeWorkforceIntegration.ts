import {serializeChangeTrackedEntity} from './serializeChangeTrackedEntity';
import {serializeWorkforceIntegrationEncryption} from './serializeWorkforceIntegrationEncryption';
import {WorkforceIntegration} from './workforceIntegration';
import {WorkforceIntegrationEncryption} from './workforceIntegrationEncryption';
import {WorkforceIntegrationSupportedEntities} from './workforceIntegrationSupportedEntities';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkforceIntegration(writer: SerializationWriter, workforceIntegration: WorkforceIntegration | undefined = {} as WorkforceIntegration) : void {
        serializeChangeTrackedEntity(writer, workforceIntegration)
        writer.writeNumberValue("apiVersion", workforceIntegration.apiVersion);
        writer.writeStringValue("displayName", workforceIntegration.displayName);
        writer.writeObjectValue<WorkforceIntegrationEncryption>("encryption", workforceIntegration.encryption, serializeWorkforceIntegrationEncryption);
        writer.writeBooleanValue("isActive", workforceIntegration.isActive);
        writer.writeEnumValue<WorkforceIntegrationSupportedEntities>("supportedEntities", workforceIntegration.supportedEntities);
        writer.writeStringValue("url", workforceIntegration.url);
}
