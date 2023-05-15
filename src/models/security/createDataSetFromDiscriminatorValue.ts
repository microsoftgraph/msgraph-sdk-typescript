import {deserializeIntoDataSet} from './deserializeIntoDataSet';
import {deserializeIntoEdiscoveryReviewSet} from './deserializeIntoEdiscoveryReviewSet';
import {DataSet, EdiscoveryReviewSet} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataSetFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.ediscoveryReviewSet":
                    return deserializeIntoEdiscoveryReviewSet;
            }
        }
    }
    return deserializeIntoDataSet;
}
