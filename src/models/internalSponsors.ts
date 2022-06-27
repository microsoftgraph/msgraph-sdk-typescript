import {SubjectSet} from './subjectSet';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface InternalSponsors extends Partial<AdditionalDataHolder>, Partial<Parsable>, SubjectSet {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
}
