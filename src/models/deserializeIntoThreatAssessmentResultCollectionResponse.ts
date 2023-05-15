import {createThreatAssessmentResultFromDiscriminatorValue} from './createThreatAssessmentResultFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {serializeThreatAssessmentResult} from './serializeThreatAssessmentResult';
import {ThreatAssessmentResult} from './threatAssessmentResult';
import {ThreatAssessmentResultCollectionResponse} from './threatAssessmentResultCollectionResponse';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoThreatAssessmentResultCollectionResponse(threatAssessmentResultCollectionResponse: ThreatAssessmentResultCollectionResponse | undefined = {} as ThreatAssessmentResultCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(threatAssessmentResultCollectionResponse),
        "value": n => { threatAssessmentResultCollectionResponse.value = n.getCollectionOfObjectValues<ThreatAssessmentResult>(createThreatAssessmentResultFromDiscriminatorValue); },
    }
}
