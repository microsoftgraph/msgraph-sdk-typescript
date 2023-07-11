import {Entity} from '../entity';
import {HostReputationClassification} from './hostReputationClassification';
import {HostReputationRule} from './hostReputationRule';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface HostReputation extends Entity, Parsable {
    /**
     * The classification property
     */
    classification?: HostReputationClassification | undefined;
    /**
     * A collection of rules that have been used to calculate the classification and score.
     */
    rules?: HostReputationRule[] | undefined;
    /**
     * The calculated score (0-100) of the requested host. A higher value indicates that this host is more likely to be suspicious or malicious.
     */
    score?: number | undefined;
}
