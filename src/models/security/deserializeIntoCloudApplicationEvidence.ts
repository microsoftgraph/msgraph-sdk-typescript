import {CloudApplicationEvidence} from './cloudApplicationEvidence';
import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoCloudApplicationEvidence(cloudApplicationEvidence: CloudApplicationEvidence | undefined = {} as CloudApplicationEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(cloudApplicationEvidence),
        "appId": n => { cloudApplicationEvidence.appId = n.getNumberValue(); },
        "displayName": n => { cloudApplicationEvidence.displayName = n.getStringValue(); },
        "instanceId": n => { cloudApplicationEvidence.instanceId = n.getNumberValue(); },
        "instanceName": n => { cloudApplicationEvidence.instanceName = n.getStringValue(); },
        "saasAppId": n => { cloudApplicationEvidence.saasAppId = n.getNumberValue(); },
    }
}
