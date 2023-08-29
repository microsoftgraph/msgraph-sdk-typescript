import type {Alert as Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5} from './alert';
import type {AttackSimulationRoot} from './attackSimulationRoot';
import type {SecureScore} from './secureScore';
import type {SecureScoreControlProfile} from './secureScoreControlProfile';
import type {Security} from './security';
import type {Alert as If337ba6a3f4441533bff674c7936f9a66ee7175d1fa8f344f99ced2d5f70813a} from './security/alert';
import type {CasesRoot} from './security/casesRoot';
import type {Incident} from './security/incident';
import {serializeAlert as I0f6f1640bad114888c183d249a1463b82216dae028f69d31b9f11cc554a90f84} from './security/serializeAlert';
import {serializeCasesRoot} from './security/serializeCasesRoot';
import {serializeIncident} from './security/serializeIncident';
import {serializeThreatIntelligence} from './security/serializeThreatIntelligence';
import {serializeTriggerTypesRoot} from './security/serializeTriggerTypesRoot';
import {serializeTriggersRoot} from './security/serializeTriggersRoot';
import type {ThreatIntelligence} from './security/threatIntelligence';
import type {TriggerTypesRoot} from './security/triggerTypesRoot';
import type {TriggersRoot} from './security/triggersRoot';
import {serializeAlert as I158b11783bd5d0b71051c264728d2a6f353dbcaf1e7fa436fae43a16aeb39163} from './serializeAlert';
import {serializeAttackSimulationRoot} from './serializeAttackSimulationRoot';
import {serializeEntity} from './serializeEntity';
import {serializeSecureScore} from './serializeSecureScore';
import {serializeSecureScoreControlProfile} from './serializeSecureScoreControlProfile';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSecurity(writer: SerializationWriter, security: Security | undefined = {} as Security) : void {
        serializeEntity(writer, security)
        writer.writeCollectionOfObjectValues<Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5>("alerts", security.alerts, I158b11783bd5d0b71051c264728d2a6f353dbcaf1e7fa436fae43a16aeb39163);
        writer.writeCollectionOfObjectValues<If337ba6a3f4441533bff674c7936f9a66ee7175d1fa8f344f99ced2d5f70813a>("alerts_v2", security.alerts_v2, I0f6f1640bad114888c183d249a1463b82216dae028f69d31b9f11cc554a90f84);
        writer.writeObjectValue<AttackSimulationRoot>("attackSimulation", security.attackSimulation, serializeAttackSimulationRoot);
        writer.writeObjectValue<CasesRoot>("cases", security.cases, serializeCasesRoot);
        writer.writeCollectionOfObjectValues<Incident>("incidents", security.incidents, serializeIncident);
        writer.writeCollectionOfObjectValues<SecureScoreControlProfile>("secureScoreControlProfiles", security.secureScoreControlProfiles, serializeSecureScoreControlProfile);
        writer.writeCollectionOfObjectValues<SecureScore>("secureScores", security.secureScores, serializeSecureScore);
        writer.writeObjectValue<ThreatIntelligence>("threatIntelligence", security.threatIntelligence, serializeThreatIntelligence);
        writer.writeObjectValue<TriggersRoot>("triggers", security.triggers, serializeTriggersRoot);
        writer.writeObjectValue<TriggerTypesRoot>("triggerTypes", security.triggerTypes, serializeTriggerTypesRoot);
}
