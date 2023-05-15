import {WorkforceIntegrationEncryption} from './workforceIntegrationEncryption';
import {WorkforceIntegrationEncryptionProtocol} from './workforceIntegrationEncryptionProtocol';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeWorkforceIntegrationEncryption(writer: SerializationWriter, workforceIntegrationEncryption: WorkforceIntegrationEncryption | undefined = {} as WorkforceIntegrationEncryption) : void {
        writer.writeStringValue("@odata.type", workforceIntegrationEncryption.odataType);
        writer.writeEnumValue<WorkforceIntegrationEncryptionProtocol>("protocol", workforceIntegrationEncryption.protocol);
        writer.writeStringValue("secret", workforceIntegrationEncryption.secret);
        writer.writeAdditionalData(workforceIntegrationEncryption.additionalData);
}
