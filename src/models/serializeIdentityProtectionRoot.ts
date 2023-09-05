import { type IdentityProtectionRoot } from './identityProtectionRoot';
import { type RiskDetection } from './riskDetection';
import { type RiskyServicePrincipal } from './riskyServicePrincipal';
import { type RiskyUser } from './riskyUser';
import { serializeRiskDetection } from './serializeRiskDetection';
import { serializeRiskyServicePrincipal } from './serializeRiskyServicePrincipal';
import { serializeRiskyUser } from './serializeRiskyUser';
import { serializeServicePrincipalRiskDetection } from './serializeServicePrincipalRiskDetection';
import { type ServicePrincipalRiskDetection } from './servicePrincipalRiskDetection';
import { type AdditionalDataHolder, type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeIdentityProtectionRoot(writer: SerializationWriter, identityProtectionRoot: IdentityProtectionRoot | undefined = {} as IdentityProtectionRoot) : void {
        writer.writeStringValue("@odata.type", identityProtectionRoot.odataType);
        writer.writeCollectionOfObjectValues<RiskDetection>("riskDetections", identityProtectionRoot.riskDetections, serializeRiskDetection);
        writer.writeCollectionOfObjectValues<RiskyServicePrincipal>("riskyServicePrincipals", identityProtectionRoot.riskyServicePrincipals, serializeRiskyServicePrincipal);
        writer.writeCollectionOfObjectValues<RiskyUser>("riskyUsers", identityProtectionRoot.riskyUsers, serializeRiskyUser);
        writer.writeCollectionOfObjectValues<ServicePrincipalRiskDetection>("servicePrincipalRiskDetections", identityProtectionRoot.servicePrincipalRiskDetections, serializeServicePrincipalRiskDetection);
        writer.writeAdditionalData(identityProtectionRoot.additionalData);
}
