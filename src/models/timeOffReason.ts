import {ChangeTrackedEntity} from './changeTrackedEntity';
import {TimeOffReasonIconType} from './timeOffReasonIconType';

export interface TimeOffReason extends ChangeTrackedEntity{
    /** The name of the timeOffReason. Required. */
    displayName?:string | undefined;
    /** Supported icon types: none; car; calendar; running; plane; firstAid; doctor; notWorking; clock; juryDuty; globe; cup; phone; weather; umbrella; piggyBank; dog; cake; trafficCone; pin; sunny. Required. */
    iconType?:TimeOffReasonIconType | undefined;
    /** Indicates whether the timeOffReason can be used when creating new entities or updating existing ones. Required. */
    isActive?:boolean | undefined;
}
