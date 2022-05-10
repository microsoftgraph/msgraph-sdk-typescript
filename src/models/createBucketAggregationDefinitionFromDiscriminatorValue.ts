import {BucketAggregationDefinitionImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBucketAggregationDefinitionFromDiscriminatorValue(parseNode: ParseNode | undefined) : BucketAggregationDefinitionImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BucketAggregationDefinitionImpl();
}
