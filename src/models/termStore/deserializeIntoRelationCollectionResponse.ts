import { deserializeIntoBaseCollectionPaginationCountResponse } from '../deserializeIntoBaseCollectionPaginationCountResponse';
import { createRelationFromDiscriminatorValue } from './createRelationFromDiscriminatorValue';
import { type Relation } from './relation';
import { type RelationCollectionResponse } from './relationCollectionResponse';
import { serializeRelation } from './serializeRelation';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRelationCollectionResponse(relationCollectionResponse: RelationCollectionResponse | undefined = {} as RelationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(relationCollectionResponse),
        "value": n => { relationCollectionResponse.value = n.getCollectionOfObjectValues<Relation>(createRelationFromDiscriminatorValue); },
    }
}
