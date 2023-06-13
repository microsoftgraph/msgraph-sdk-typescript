import {AzureResourceEvidence} from './azureResourceEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeAzureResourceEvidence(writer: SerializationWriter, azureResourceEvidence: AzureResourceEvidence | undefined = {} as AzureResourceEvidence) : void {
        serializeAlertEvidence(writer, azureResourceEvidence)
        writer.writeStringValue("resourceId", azureResourceEvidence.resourceId);
        writer.writeStringValue("resourceName", azureResourceEvidence.resourceName);
        writer.writeStringValue("resourceType", azureResourceEvidence.resourceType);
}
