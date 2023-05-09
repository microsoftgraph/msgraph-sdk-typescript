import {CloudAppSecurityState} from './cloudAppSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeCloudAppSecurityState(writer: SerializationWriter, cloudAppSecurityState: CloudAppSecurityState | undefined = {} as CloudAppSecurityState) : void {
        writer.writeStringValue("destinationServiceIp", cloudAppSecurityState.destinationServiceIp);
        writer.writeStringValue("destinationServiceName", cloudAppSecurityState.destinationServiceName);
        writer.writeStringValue("@odata.type", cloudAppSecurityState.odataType);
        writer.writeStringValue("riskScore", cloudAppSecurityState.riskScore);
        writer.writeAdditionalData(cloudAppSecurityState.additionalData);
}
