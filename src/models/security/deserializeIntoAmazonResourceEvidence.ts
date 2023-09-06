import { type AmazonResourceEvidence } from './amazonResourceEvidence';
import { deserializeIntoAlertEvidence } from './deserializeIntoAlertEvidence';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoAmazonResourceEvidence(amazonResourceEvidence: AmazonResourceEvidence | undefined = {} as AmazonResourceEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(amazonResourceEvidence),
        "amazonAccountId": n => { amazonResourceEvidence.amazonAccountId = n.getStringValue(); },
        "amazonResourceId": n => { amazonResourceEvidence.amazonResourceId = n.getStringValue(); },
        "resourceName": n => { amazonResourceEvidence.resourceName = n.getStringValue(); },
        "resourceType": n => { amazonResourceEvidence.resourceType = n.getStringValue(); },
    }
}
