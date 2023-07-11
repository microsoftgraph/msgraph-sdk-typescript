import {deserializeIntoCaseOperation} from './deserializeIntoCaseOperation';
import {deserializeIntoEdiscoveryAddToReviewSetOperation} from './deserializeIntoEdiscoveryAddToReviewSetOperation';
import {deserializeIntoEdiscoveryEstimateOperation} from './deserializeIntoEdiscoveryEstimateOperation';
import {deserializeIntoEdiscoveryExportOperation} from './deserializeIntoEdiscoveryExportOperation';
import {deserializeIntoEdiscoveryHoldOperation} from './deserializeIntoEdiscoveryHoldOperation';
import {deserializeIntoEdiscoveryIndexOperation} from './deserializeIntoEdiscoveryIndexOperation';
import {deserializeIntoEdiscoveryPurgeDataOperation} from './deserializeIntoEdiscoveryPurgeDataOperation';
import {deserializeIntoEdiscoveryTagOperation} from './deserializeIntoEdiscoveryTagOperation';
import {CaseOperation, EdiscoveryAddToReviewSetOperation, EdiscoveryEstimateOperation, EdiscoveryExportOperation, EdiscoveryHoldOperation, EdiscoveryIndexOperation, EdiscoveryPurgeDataOperation, EdiscoveryTagOperation} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createCaseOperationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.ediscoveryAddToReviewSetOperation":
                    return deserializeIntoEdiscoveryAddToReviewSetOperation;
                case "#microsoft.graph.security.ediscoveryEstimateOperation":
                    return deserializeIntoEdiscoveryEstimateOperation;
                case "#microsoft.graph.security.ediscoveryExportOperation":
                    return deserializeIntoEdiscoveryExportOperation;
                case "#microsoft.graph.security.ediscoveryHoldOperation":
                    return deserializeIntoEdiscoveryHoldOperation;
                case "#microsoft.graph.security.ediscoveryIndexOperation":
                    return deserializeIntoEdiscoveryIndexOperation;
                case "#microsoft.graph.security.ediscoveryPurgeDataOperation":
                    return deserializeIntoEdiscoveryPurgeDataOperation;
                case "#microsoft.graph.security.ediscoveryTagOperation":
                    return deserializeIntoEdiscoveryTagOperation;
            }
        }
    }
    return deserializeIntoCaseOperation;
}
