import {createThreatAssessmentResultFromDiscriminatorValue} from './createThreatAssessmentResultFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeThreatAssessmentResult} from './serializeThreatAssessmentResult';
import type {ThreatAssessmentResult} from './threatAssessmentResult';
import type {ThreatAssessmentResultCollectionResponse} from './threatAssessmentResultCollectionResponse';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThreatAssessmentResultCollectionResponse(threatAssessmentResultCollectionResponse: ThreatAssessmentResultCollectionResponse | undefined = {} as ThreatAssessmentResultCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(threatAssessmentResultCollectionResponse),
        "value": n => { threatAssessmentResultCollectionResponse.value = n.getCollectionOfObjectValues<ThreatAssessmentResult>(createThreatAssessmentResultFromDiscriminatorValue); },
    }
}
