import {TeamInfo} from './teamInfo';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface AssociatedTeamInfo extends Partial<Parsable>, TeamInfo {
}
