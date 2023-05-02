import {ComplianceInformation} from './complianceInformation';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {SecureScoreControlStateUpdate} from './secureScoreControlStateUpdate';
import {SecurityVendorInformation} from './securityVendorInformation';
import {serializeComplianceInformation} from './serializeComplianceInformation';
import {serializeEntity} from './serializeEntity';
import {serializeSecureScoreControlStateUpdate} from './serializeSecureScoreControlStateUpdate';
import {serializeSecurityVendorInformation} from './serializeSecurityVendorInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecureScoreControlProfile(writer: SerializationWriter, secureScoreControlProfile: SecureScoreControlProfile | undefined = {} as SecureScoreControlProfile) : void {
        serializeEntity(writer, secureScoreControlProfile)
        writer.writeStringValue("actionType", secureScoreControlProfile.actionType);
        writer.writeStringValue("actionUrl", secureScoreControlProfile.actionUrl);
        writer.writeStringValue("azureTenantId", secureScoreControlProfile.azureTenantId);
        writer.writeCollectionOfObjectValues<ComplianceInformation>("complianceInformation", secureScoreControlProfile.complianceInformation, serializeComplianceInformation);
        writer.writeStringValue("controlCategory", secureScoreControlProfile.controlCategory);
        writer.writeCollectionOfObjectValues<SecureScoreControlStateUpdate>("controlStateUpdates", secureScoreControlProfile.controlStateUpdates, serializeSecureScoreControlStateUpdate);
        writer.writeBooleanValue("deprecated", secureScoreControlProfile.deprecated);
        writer.writeStringValue("implementationCost", secureScoreControlProfile.implementationCost);
        writer.writeDateValue("lastModifiedDateTime", secureScoreControlProfile.lastModifiedDateTime);
        writer.writeNumberValue("maxScore", secureScoreControlProfile.maxScore);
        writer.writeNumberValue("rank", secureScoreControlProfile.rank);
        writer.writeStringValue("remediation", secureScoreControlProfile.remediation);
        writer.writeStringValue("remediationImpact", secureScoreControlProfile.remediationImpact);
        writer.writeStringValue("service", secureScoreControlProfile.service);
        writer.writeCollectionOfPrimitiveValues<string>("threats", secureScoreControlProfile.threats);
        writer.writeStringValue("tier", secureScoreControlProfile.tier);
        writer.writeStringValue("title", secureScoreControlProfile.title);
        writer.writeStringValue("userImpact", secureScoreControlProfile.userImpact);
        writer.writeObjectValue<SecurityVendorInformation>("vendorInformation", secureScoreControlProfile.vendorInformation, serializeSecurityVendorInformation);
}
