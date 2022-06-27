import {Bitlocker} from './bitlocker';
import {Entity} from './entity';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface InformationProtection extends Entity, Partial<Parsable> {
    /** The bitlocker property */
    bitlocker?: Bitlocker | undefined;
    /** The threatAssessmentRequests property */
    threatAssessmentRequests?: ThreatAssessmentRequest[] | undefined;
}
