import { deserializeIntoRelation } from './deserializeIntoRelation';
import { type Relation } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createRelationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoRelation;
}
