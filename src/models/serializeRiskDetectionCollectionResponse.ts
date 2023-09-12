import { type RiskDetection } from './riskDetection';
import { type RiskDetectionCollectionResponse } from './riskDetectionCollectionResponse';
import { serializeBaseCollectionPaginationCountResponse } from './serializeBaseCollectionPaginationCountResponse';
import { serializeRiskDetection } from './serializeRiskDetection';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeRiskDetectionCollectionResponse(writer: SerializationWriter, riskDetectionCollectionResponse: RiskDetectionCollectionResponse | undefined = {} as RiskDetectionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskDetectionCollectionResponse)
        writer.writeCollectionOfObjectValues<RiskDetection>("value", riskDetectionCollectionResponse.value, serializeRiskDetection);
}
