import {deserializeIntoAlertEvidence} from './deserializeIntoAlertEvidence';
import type {SecurityGroupEvidence} from './securityGroupEvidence';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurityGroupEvidence(securityGroupEvidence: SecurityGroupEvidence | undefined = {} as SecurityGroupEvidence) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoAlertEvidence(securityGroupEvidence),
        "displayName": n => { securityGroupEvidence.displayName = n.getStringValue(); },
        "securityGroupId": n => { securityGroupEvidence.securityGroupId = n.getStringValue(); },
    }
}
