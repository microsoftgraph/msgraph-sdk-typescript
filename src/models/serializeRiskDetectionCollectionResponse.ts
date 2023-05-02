import {RiskDetection} from './riskDetection';
import {RiskDetectionCollectionResponse} from './riskDetectionCollectionResponse';
import {serializeBaseCollectionPaginationCountResponse} from './serializeBaseCollectionPaginationCountResponse';
import {serializeRiskDetection} from './serializeRiskDetection';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRiskDetectionCollectionResponse(writer: SerializationWriter, riskDetectionCollectionResponse: RiskDetectionCollectionResponse | undefined = {} as RiskDetectionCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, riskDetectionCollectionResponse)
        writer.writeCollectionOfObjectValues<RiskDetection>("value", riskDetectionCollectionResponse.value, serializeRiskDetection);
}
