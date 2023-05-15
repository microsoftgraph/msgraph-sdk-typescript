import {ComplianceInformation} from './complianceInformation';
import {createComplianceInformationFromDiscriminatorValue} from './createComplianceInformationFromDiscriminatorValue';
import {createSecureScoreControlStateUpdateFromDiscriminatorValue} from './createSecureScoreControlStateUpdateFromDiscriminatorValue';
import {createSecurityVendorInformationFromDiscriminatorValue} from './createSecurityVendorInformationFromDiscriminatorValue';
import {deserializeIntoEntity} from './deserializeIntoEntity';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {SecureScoreControlStateUpdate} from './secureScoreControlStateUpdate';
import {SecurityVendorInformation} from './securityVendorInformation';
import {serializeComplianceInformation} from './serializeComplianceInformation';
import {serializeSecureScoreControlStateUpdate} from './serializeSecureScoreControlStateUpdate';
import {serializeSecurityVendorInformation} from './serializeSecurityVendorInformation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoSecureScoreControlProfile(secureScoreControlProfile: SecureScoreControlProfile | undefined = {} as SecureScoreControlProfile) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(secureScoreControlProfile),
        "actionType": n => { secureScoreControlProfile.actionType = n.getStringValue(); },
        "actionUrl": n => { secureScoreControlProfile.actionUrl = n.getStringValue(); },
        "azureTenantId": n => { secureScoreControlProfile.azureTenantId = n.getStringValue(); },
        "complianceInformation": n => { secureScoreControlProfile.complianceInformation = n.getCollectionOfObjectValues<ComplianceInformation>(createComplianceInformationFromDiscriminatorValue); },
        "controlCategory": n => { secureScoreControlProfile.controlCategory = n.getStringValue(); },
        "controlStateUpdates": n => { secureScoreControlProfile.controlStateUpdates = n.getCollectionOfObjectValues<SecureScoreControlStateUpdate>(createSecureScoreControlStateUpdateFromDiscriminatorValue); },
        "deprecated": n => { secureScoreControlProfile.deprecated = n.getBooleanValue(); },
        "implementationCost": n => { secureScoreControlProfile.implementationCost = n.getStringValue(); },
        "lastModifiedDateTime": n => { secureScoreControlProfile.lastModifiedDateTime = n.getDateValue(); },
        "maxScore": n => { secureScoreControlProfile.maxScore = n.getNumberValue(); },
        "rank": n => { secureScoreControlProfile.rank = n.getNumberValue(); },
        "remediation": n => { secureScoreControlProfile.remediation = n.getStringValue(); },
        "remediationImpact": n => { secureScoreControlProfile.remediationImpact = n.getStringValue(); },
        "service": n => { secureScoreControlProfile.service = n.getStringValue(); },
        "threats": n => { secureScoreControlProfile.threats = n.getCollectionOfPrimitiveValues<string>(); },
        "tier": n => { secureScoreControlProfile.tier = n.getStringValue(); },
        "title": n => { secureScoreControlProfile.title = n.getStringValue(); },
        "userImpact": n => { secureScoreControlProfile.userImpact = n.getStringValue(); },
        "vendorInformation": n => { secureScoreControlProfile.vendorInformation = n.getObjectValue<SecurityVendorInformation>(createSecurityVendorInformationFromDiscriminatorValue); },
    }
}
