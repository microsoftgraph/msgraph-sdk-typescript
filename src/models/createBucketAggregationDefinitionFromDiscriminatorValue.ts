import {deserializeIntoBucketAggregationDefinition} from './deserializeIntoBucketAggregationDefinition';
import {BucketAggregationDefinition} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBucketAggregationDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoBucketAggregationDefinition;
}
