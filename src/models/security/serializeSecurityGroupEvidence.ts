import type {SecurityGroupEvidence} from './securityGroupEvidence';
import {serializeAlertEvidence} from './serializeAlertEvidence';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurityGroupEvidence(writer: SerializationWriter, securityGroupEvidence: SecurityGroupEvidence | undefined = {} as SecurityGroupEvidence) : void {
        serializeAlertEvidence(writer, securityGroupEvidence)
        writer.writeStringValue("displayName", securityGroupEvidence.displayName);
        writer.writeStringValue("securityGroupId", securityGroupEvidence.securityGroupId);
}
