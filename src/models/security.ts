import {Alert as Ifc3dd46d8c20580598e3887e951736840b38f25b65d12c7df595f8b23d2eeae5} from './alert';
import {AttackSimulationRoot} from './attackSimulationRoot';
import {Entity} from './entity';
import {SecureScore} from './secureScore';
import {SecureScoreControlProfile} from './secureScoreControlProfile';
import {Alert as If337ba6a3f4441533bff674c7936f9a66ee7175d1fa8f344f99ced2d5f70813a} from './security/alert';
import {CasesRoot} from './security/casesRoot';
import {Incident} from './security/incident';
import {TriggersRoot} from './security/triggersRoot';
import {TriggerTypesRoot} from './security/triggerTypesRoot';
import {Parsable} from '@microsoft/kiota-abstractions';

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
     * The triggers property
     */
    triggers?: TriggersRoot | undefined;
    /**
     * The triggerTypes property
     */
    triggerTypes?: TriggerTypesRoot | undefined;
}
