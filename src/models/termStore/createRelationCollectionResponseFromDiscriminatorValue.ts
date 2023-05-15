import {deserializeIntoRelationCollectionResponse} from './deserializeIntoRelationCollectionResponse';
import {RelationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createRelationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRelationCollectionResponse;
}
