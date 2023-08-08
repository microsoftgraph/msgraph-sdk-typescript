import type {Alert as Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5} from './alert';
import type {AttackSimulationRoot} from './attackSimulationRoot';
import type {Entity} from './entity';
import type {SecureScore} from './secureScore';
import type {SecureScoreControlProfile} from './secureScoreControlProfile';
import type {Alert as If337ba6a3f4441533bff674c7936f9a66ee7175d1fa8f344f99ced2d5f70813a} from './security/alert';
import type {CasesRoot} from './security/casesRoot';
import type {Incident} from './security/incident';
import type {ThreatIntelligence} from './security/threatIntelligence';
import type {TriggersRoot} from './security/triggersRoot';
import type {TriggerTypesRoot} from './security/triggerTypesRoot';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface Security extends Entity, Parsable {
    /**
     * The alerts property
     */
    alerts?: Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5[] | undefined;
    /**
     * A collection of alerts in Microsoft 365 Defender.
     */
    alerts_v2?: If337ba6a3f4441533bff674c7936f9a66ee7175d1fa8f344f99ced2d5f70813a[] | undefined;
    /**
     * The attackSimulation property
     */
    attackSimulation?: AttackSimulationRoot | undefined;
    /**
     * The cases property
     */
    cases?: CasesRoot | undefined;
    /**
     * A collection of incidents in Microsoft 365 Defender, each of which is a set of correlated alerts and associated metadata that reflects the story of an attack.
     */
    incidents?: Incident[] | undefined;
    /**
     * The secureScoreControlProfiles property
     */
    secureScoreControlProfiles?: SecureScoreControlProfile[] | undefined;
    /**
     * The secureScores property
     */
    secureScores?: SecureScore[] | undefined;
    /**
     * The threatIntelligence property
     */
    threatIntelligence?: ThreatIntelligence | undefined;
    /**
     * The triggers property
     */
    triggers?: TriggersRoot | undefined;
    /**
     * The triggerTypes property
     */
    triggerTypes?: TriggerTypesRoot | undefined;
}
