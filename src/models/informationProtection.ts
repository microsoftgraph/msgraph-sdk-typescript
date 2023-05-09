import {Bitlocker} from './bitlocker';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InformationProtection extends AdditionalDataHolder, Parsable {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The bitlocker property */
    bitlocker?: Bitlocker | undefined;
    /** The OdataType property */
    odataType?: string | undefined;
    /** The threatAssessmentRequests property */
    threatAssessmentRequests?: ThreatAssessmentRequest[] | undefined;
}
