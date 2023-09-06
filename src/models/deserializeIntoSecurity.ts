import { type Alert as Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5 } from './alert';
import { type AttackSimulationRoot } from './attackSimulationRoot';
import { createAlertFromDiscriminatorValue as I1cb3f0565cf1eaf3d4684f805b8ff85c0f5befafa3890fbd5b7417da601b6295 } from './createAlertFromDiscriminatorValue';
import { createAttackSimulationRootFromDiscriminatorValue } from './createAttackSimulationRootFromDiscriminatorValue';
import { createSecureScoreControlProfileFromDiscriminatorValue } from './createSecureScoreControlProfileFromDiscriminatorValue';
import { createSecureScoreFromDiscriminatorValue } from './createSecureScoreFromDiscriminatorValue';
import { createSubjectRightsRequestFromDiscriminatorValue } from './createSubjectRightsRequestFromDiscriminatorValue';
import { deserializeIntoEntity } from './deserializeIntoEntity';
import { type SecureScore } from './secureScore';
import { type SecureScoreControlProfile } from './secureScoreControlProfile';
import { type Security } from './security';
import { type Alert as If337ba6a3f4441533bff674c7936f9a66ee7175d1fa8f344f99ced2d5f70813a } from './security/alert';
import { type CasesRoot } from './security/casesRoot';
import { createAlertFromDiscriminatorValue as Ic3df26bb503216c70f1b1537fb1cb7605d034f17f11b693448013e01824d59a7 } from './security/createAlertFromDiscriminatorValue';
import { createCasesRootFromDiscriminatorValue } from './security/createCasesRootFromDiscriminatorValue';
import { createIncidentFromDiscriminatorValue } from './security/createIncidentFromDiscriminatorValue';
import { createThreatIntelligenceFromDiscriminatorValue } from './security/createThreatIntelligenceFromDiscriminatorValue';
import { createTriggersRootFromDiscriminatorValue } from './security/createTriggersRootFromDiscriminatorValue';
import { createTriggerTypesRootFromDiscriminatorValue } from './security/createTriggerTypesRootFromDiscriminatorValue';
import { type Incident } from './security/incident';
import { serializeAlert as I0f6f1640bad114888c183d249a1463b82216dae028f69d31b9f11cc554a90f84 } from './security/serializeAlert';
import { serializeCasesRoot } from './security/serializeCasesRoot';
import { serializeIncident } from './security/serializeIncident';
import { serializeThreatIntelligence } from './security/serializeThreatIntelligence';
import { serializeTriggersRoot } from './security/serializeTriggersRoot';
import { serializeTriggerTypesRoot } from './security/serializeTriggerTypesRoot';
import { type ThreatIntelligence } from './security/threatIntelligence';
import { type TriggersRoot } from './security/triggersRoot';
import { type TriggerTypesRoot } from './security/triggerTypesRoot';
import { serializeAlert as I158b11783bd5d0b71051c264728d2a6f353dbcaf1e7fa436fae43a16aeb39163 } from './serializeAlert';
import { serializeAttackSimulationRoot } from './serializeAttackSimulationRoot';
import { serializeSecureScore } from './serializeSecureScore';
import { serializeSecureScoreControlProfile } from './serializeSecureScoreControlProfile';
import { serializeSubjectRightsRequest } from './serializeSubjectRightsRequest';
import { type SubjectRightsRequest } from './subjectRightsRequest';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoSecurity(security: Security | undefined = {} as Security) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(security),
        "alerts": n => { security.alerts = n.getCollectionOfObjectValues<Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5>(I1cb3f0565cf1eaf3d4684f805b8ff85c0f5befafa3890fbd5b7417da601b6295); },
        "alerts_v2": n => { security.alerts_v2 = n.getCollectionOfObjectValues<If337ba6a3f4441533bff674c7936f9a66ee7175d1fa8f344f99ced2d5f70813a>(Ic3df26bb503216c70f1b1537fb1cb7605d034f17f11b693448013e01824d59a7); },
        "attackSimulation": n => { security.attackSimulation = n.getObjectValue<AttackSimulationRoot>(createAttackSimulationRootFromDiscriminatorValue); },
        "cases": n => { security.cases = n.getObjectValue<CasesRoot>(createCasesRootFromDiscriminatorValue); },
        "incidents": n => { security.incidents = n.getCollectionOfObjectValues<Incident>(createIncidentFromDiscriminatorValue); },
        "secureScoreControlProfiles": n => { security.secureScoreControlProfiles = n.getCollectionOfObjectValues<SecureScoreControlProfile>(createSecureScoreControlProfileFromDiscriminatorValue); },
        "secureScores": n => { security.secureScores = n.getCollectionOfObjectValues<SecureScore>(createSecureScoreFromDiscriminatorValue); },
        "subjectRightsRequests": n => { security.subjectRightsRequests = n.getCollectionOfObjectValues<SubjectRightsRequest>(createSubjectRightsRequestFromDiscriminatorValue); },
        "threatIntelligence": n => { security.threatIntelligence = n.getObjectValue<ThreatIntelligence>(createThreatIntelligenceFromDiscriminatorValue); },
        "triggers": n => { security.triggers = n.getObjectValue<TriggersRoot>(createTriggersRootFromDiscriminatorValue); },
        "triggerTypes": n => { security.triggerTypes = n.getObjectValue<TriggerTypesRoot>(createTriggerTypesRootFromDiscriminatorValue); },
    }
}
