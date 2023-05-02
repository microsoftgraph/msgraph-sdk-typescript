import {createThreatAssessmentRequestFromDiscriminatorValue} from './createThreatAssessmentRequestFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeThreatAssessmentRequest} from './serializeThreatAssessmentRequest';
import {ThreatAssessmentRequest} from './threatAssessmentRequest';
import {ThreatAssessmentRequestCollectionResponse} from './threatAssessmentRequestCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThreatAssessmentRequestCollectionResponse(threatAssessmentRequestCollectionResponse: ThreatAssessmentRequestCollectionResponse | undefined = {} as ThreatAssessmentRequestCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(threatAssessmentRequestCollectionResponse),
        "value": n => { threatAssessmentRequestCollectionResponse.value = n.getCollectionOfObjectValues<ThreatAssessmentRequest>(createThreatAssessmentRequestFromDiscriminatorValue); },
    }
}
