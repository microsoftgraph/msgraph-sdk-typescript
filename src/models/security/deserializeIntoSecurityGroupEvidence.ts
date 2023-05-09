import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import {SecurityGroupEvidence} from './securityGroupEvidence';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityGroupEvidence(securityGroupEvidence: SecurityGroupEvidence | undefined = {} as SecurityGroupEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(securityGroupEvidence),
        "displayName": n => { securityGroupEvidence.displayName = n.getStringValue(); },
        "securityGroupId": n => { securityGroupEvidence.securityGroupId = n.getStringValue(); },
    }
}
