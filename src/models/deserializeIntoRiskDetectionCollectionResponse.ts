import {createRiskDetectionFromDiscriminatorValue} from './createRiskDetectionFromDiscriminatorValue';
import {deserializeIntoBaseCollectionPaginationCountResponse} from './deserializeIntoBaseCollectionPaginationCountResponse';
import {RiskDetection} from './riskDetection';
import {RiskDetectionCollectionResponse} from './riskDetectionCollectionResponse';
import {serializeRiskDetection} from './serializeRiskDetection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRiskDetectionCollectionResponse(riskDetectionCollectionResponse: RiskDetectionCollectionResponse | undefined = {} as RiskDetectionCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(riskDetectionCollectionResponse),
        "value": n => { riskDetectionCollectionResponse.value = n.getCollectionOfObjectValues<RiskDetection>(createRiskDetectionFromDiscriminatorValue); },
    }
}
