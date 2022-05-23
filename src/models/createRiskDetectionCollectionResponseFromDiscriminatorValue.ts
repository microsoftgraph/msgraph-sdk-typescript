import {RiskDetectionCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRiskDetectionCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : RiskDetectionCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new RiskDetectionCollectionResponseImpl();
}
