import {Bitlocker} from './bitlocker';
import {Entity} from './entity';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';

export interface InformationProtection extends Entity{
    /** The bitlocker property */
    bitlocker?:Bitlocker | undefined;
    /** The threatAssessmentRequests property */
    threatAssessmentRequests?:ThreatAssessmentRequest[] | undefined;
}
