import {AzureResourceEvidence} from './azureResourceEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAzureResourceEvidence(azureResourceEvidence: AzureResourceEvidence | undefined = {} as AzureResourceEvidence, writer: SerializationWriter) : void {
        serializeAlertEvidence(writer, azureResourceEvidence)
        writer.writeStringValue("resourceId", azureResourceEvidence.resourceId);
        writer.writeStringValue("resourceName", azureResourceEvidence.resourceName);
        writer.writeStringValue("resourceType", azureResourceEvidence.resourceType);
}
