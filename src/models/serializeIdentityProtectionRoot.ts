import {IdentityProtectionRoot} from './identityProtectionRoot';
import {RiskDetection} from './riskDetection';
import {RiskyServicePrincipal} from './riskyServicePrincipal';
import {RiskyUser} from './riskyUser';
import {serializeRiskDetection} from './serializeRiskDetection';
import {serializeRiskyServicePrincipal} from './serializeRiskyServicePrincipal';
import {serializeRiskyUser} from './serializeRiskyUser';
import {serializeServicePrincipalRiskDetection} from './serializeServicePrincipalRiskDetection';
import {ServicePrincipalRiskDetection} from './servicePrincipalRiskDetection';
import {AdditionalDataHolder, Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeIdentityProtectionRoot(writer: SerializationWriter, identityProtectionRoot: IdentityProtectionRoot | undefined = {} as IdentityProtectionRoot) : void {
        writer.writeStringValue("@odata.type", identityProtectionRoot.odataType);
        writer.writeCollectionOfObjectValues<RiskDetection>("riskDetections", identityProtectionRoot.riskDetections, serializeRiskDetection);
        writer.writeCollectionOfObjectValues<RiskyServicePrincipal>("riskyServicePrincipals", identityProtectionRoot.riskyServicePrincipals, serializeRiskyServicePrincipal);
        writer.writeCollectionOfObjectValues<RiskyUser>("riskyUsers", identityProtectionRoot.riskyUsers, serializeRiskyUser);
        writer.writeCollectionOfObjectValues<ServicePrincipalRiskDetection>("servicePrincipalRiskDetections", identityProtectionRoot.servicePrincipalRiskDetections, serializeServicePrincipalRiskDetection);
        writer.writeAdditionalData(identityProtectionRoot.additionalData);
}
