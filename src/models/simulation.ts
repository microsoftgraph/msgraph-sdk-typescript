import {EmailIdentity} from './emailIdentity';
import {Entity} from './entity';
import {PayloadDeliveryPlatform} from './payloadDeliveryPlatform';
import {SimulationAttackTechnique} from './simulationAttackTechnique';
import {SimulationAttackType} from './simulationAttackType';
import {SimulationReport} from './simulationReport';
import {SimulationStatus} from './simulationStatus';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Simulation extends Entity, Parsable {
    /**
     * The social engineering technique used in the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, credentialHarvesting, attachmentMalware, driveByUrl, linkInAttachment, linkToMalwareFile, unknownFutureValue. For more information on the types of social engineering attack techniques, see simulations.
     */
    attackTechnique?: SimulationAttackTechnique | undefined;
    /**
     * Attack type of the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, social, cloud, endpoint, unknownFutureValue.
     */
    attackType?: SimulationAttackType | undefined;
    /**
     * Unique identifier for the attack simulation automation.
     */
    automationId?: string | undefined;
    /**
     * Date and time of completion of the attack simulation and training campaign. Supports $filter and $orderby.
     */
    completionDateTime?: Date | undefined;
    /**
     * Identity of the user who created the attack simulation and training campaign.
     */
    createdBy?: EmailIdentity | undefined;
    /**
     * Date and time of creation of the attack simulation and training campaign.
     */
    createdDateTime?: Date | undefined;
    /**
     * Description of the attack simulation and training campaign.
     */
    description?: string | undefined;
    /**
     * Display name of the attack simulation and training campaign. Supports $filter and $orderby.
     */
    displayName?: string | undefined;
    /**
     * Flag that represents if the attack simulation and training campaign was created from a simulation automation flow. Supports $filter and $orderby.
     */
    isAutomated?: boolean | undefined;
    /**
     * Identity of the user who most recently modified the attack simulation and training campaign.
     */
    lastModifiedBy?: EmailIdentity | undefined;
    /**
     * Date and time of the most recent modification of the attack simulation and training campaign.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Date and time of the launch/start of the attack simulation and training campaign. Supports $filter and $orderby.
     */
    launchDateTime?: Date | undefined;
    /**
     * Method of delivery of the phishing payload used in the attack simulation and training campaign. Possible values are: unknown, sms, email, teams, unknownFutureValue.
     */
    payloadDeliveryPlatform?: PayloadDeliveryPlatform | undefined;
    /**
     * Report of the attack simulation and training campaign.
     */
    report?: SimulationReport | undefined;
    /**
     * Status of the attack simulation and training campaign. Supports $filter and $orderby. Possible values are: unknown, draft, running, scheduled, succeeded, failed, cancelled, excluded, unknownFutureValue.
     */
    status?: SimulationStatus | undefined;
}
