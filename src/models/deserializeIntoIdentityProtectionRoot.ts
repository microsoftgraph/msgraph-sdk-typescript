import {createRiskDetectionFromDiscriminatorValue} from './createRiskDetectionFromDiscriminatorValue';
import {createRiskyServicePrincipalFromDiscriminatorValue} from './createRiskyServicePrincipalFromDiscriminatorValue';
import {createRiskyUserFromDiscriminatorValue} from './createRiskyUserFromDiscriminatorValue';
import {createServicePrincipalRiskDetectionFromDiscriminatorValue} from './createServicePrincipalRiskDetectionFromDiscriminatorValue';
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

export function deserializeIntoIdentityProtectionRoot(identityProtectionRoot: IdentityProtectionRoot | undefined = {} as IdentityProtectionRoot) : Record<string, (node: ParseNode) => void> {
    return {
        "@odata.type": n => { identityProtectionRoot.odataType = n.getStringValue(); },
        "riskDetections": n => { identityProtectionRoot.riskDetections = n.getCollectionOfObjectValues<RiskDetection>(createRiskDetectionFromDiscriminatorValue); },
        "riskyServicePrincipals": n => { identityProtectionRoot.riskyServicePrincipals = n.getCollectionOfObjectValues<RiskyServicePrincipal>(createRiskyServicePrincipalFromDiscriminatorValue); },
        "riskyUsers": n => { identityProtectionRoot.riskyUsers = n.getCollectionOfObjectValues<RiskyUser>(createRiskyUserFromDiscriminatorValue); },
        "servicePrincipalRiskDetections": n => { identityProtectionRoot.servicePrincipalRiskDetections = n.getCollectionOfObjectValues<ServicePrincipalRiskDetection>(createServicePrincipalRiskDetectionFromDiscriminatorValue); },
    }
}
