import { type WorkforceIntegrationEncryption } from './workforceIntegrationEncryption';
import { WorkforceIntegrationEncryptionProtocol } from './workforceIntegrationEncryptionProtocol';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkforceIntegrationEncryption(workforceIntegrationEncryption: WorkforceIntegrationEncryption | undefined = {} as WorkforceIntegrationEncryption) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { workforceIntegrationEncryption.odataType = n.getStringValue(); },
        "protocol": n => { workforceIntegrationEncryption.protocol = n.getEnumValue<WorkforceIntegrationEncryptionProtocol>(WorkforceIntegrationEncryptionProtocol); },
        "secret": n => { workforceIntegrationEncryption.secret = n.getStringValue(); },
    }
}
