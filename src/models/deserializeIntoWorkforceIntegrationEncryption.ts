import {WorkforceIntegrationEncryption} from './workforceIntegrationEncryption';
import {WorkforceIntegrationEncryptionProtocol} from './workforceIntegrationEncryptionProtocol';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoWorkforceIntegrationEncryption(workforceIntegrationEncryption: WorkforceIntegrationEncryption | undefined = {} as WorkforceIntegrationEncryption) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { workforceIntegrationEncryption.odataType = n.getStringValue(); },
        "protocol": n => { workforceIntegrationEncryption.protocol = n.getEnumValue<WorkforceIntegrationEncryptionProtocol>(WorkforceIntegrationEncryptionProtocol); },
        "secret": n => { workforceIntegrationEncryption.secret = n.getStringValue(); },
    }
}
