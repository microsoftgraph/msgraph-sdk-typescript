import {Bitlocker} from './bitlocker';
import {Entity} from './entity';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InformationProtection extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The bitlocker property */
    bitlocker?: Bitlocker | undefined;
    /** The threatAssessmentRequests property */
    threatAssessmentRequests?: ThreatAssessmentRequest[] | undefined;
}
