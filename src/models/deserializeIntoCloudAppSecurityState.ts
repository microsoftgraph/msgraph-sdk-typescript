import {CloudAppSecurityState} from './cloudAppSecurityState';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudAppSecurityState(cloudAppSecurityState: CloudAppSecurityState | undefined = {} as CloudAppSecurityState) : Record<string, (node: ParseNode) => void> {
    return {
        "destinationServiceIp": n => { cloudAppSecurityState.destinationServiceIp = n.getStringValue(); },
        "destinationServiceName": n => { cloudAppSecurityState.destinationServiceName = n.getStringValue(); },
        "@odata.type": n => { cloudAppSecurityState.odataType = n.getStringValue(); },
        "riskScore": n => { cloudAppSecurityState.riskScore = n.getStringValue(); },
    }
}
