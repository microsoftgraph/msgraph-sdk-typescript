import {AzureResourceEvidence} from './azureResourceEvidence';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoAzureResourceEvidence(azureResourceEvidence: AzureResourceEvidence | undefined = {} as AzureResourceEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(azureResourceEvidence),
        "resourceId": n => { azureResourceEvidence.resourceId = n.getStringValue(); },
        "resourceName": n => { azureResourceEvidence.resourceName = n.getStringValue(); },
        "resourceType": n => { azureResourceEvidence.resourceType = n.getStringValue(); },
    }
}
