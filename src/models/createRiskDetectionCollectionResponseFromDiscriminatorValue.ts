import { deserializeIntoRiskDetectionCollectionResponse } from './deserializeIntoRiskDetectionCollectionResponse';
import { type RiskDetectionCollectionResponse } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRiskDetectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRiskDetectionCollectionResponse;
}
