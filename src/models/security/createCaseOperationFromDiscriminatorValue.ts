import {CaseOperation, EdiscoveryAddToReviewSetOperation, EdiscoveryEstimateOperation, EdiscoveryHoldOperation, EdiscoveryIndexOperation, EdiscoveryPurgeDataOperation, EdiscoveryTagOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCaseOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) : CaseOperation {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.ediscoveryAddToReviewSetOperation":
                    return new EdiscoveryAddToReviewSetOperation();
                case "#microsoft.graph.security.ediscoveryEstimateOperation":
                    return new EdiscoveryEstimateOperation();
                case "#microsoft.graph.security.ediscoveryHoldOperation":
                    return new EdiscoveryHoldOperation();
                case "#microsoft.graph.security.ediscoveryIndexOperation":
                    return new EdiscoveryIndexOperation();
                case "#microsoft.graph.security.ediscoveryPurgeDataOperation":
                    return new EdiscoveryPurgeDataOperation();
                case "#microsoft.graph.security.ediscoveryTagOperation":
                    return new EdiscoveryTagOperation();
            }
        }
    }
    return new CaseOperation();
}
