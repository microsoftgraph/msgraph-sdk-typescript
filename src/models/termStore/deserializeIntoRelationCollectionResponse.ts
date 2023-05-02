import {deserializeIntoBaseCollectionPaginationCountResponse} from '../deserializeIntoBaseCollectionPaginationCountResponse';
import {createRelationFromDiscriminatorValue} from './createRelationFromDiscriminatorValue';
import {Relation} from './relation';
import {RelationCollectionResponse} from './relationCollectionResponse';
import {serializeRelation} from './serializeRelation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoRelationCollectionResponse(relationCollectionResponse: RelationCollectionResponse | undefined = {} as RelationCollectionResponse) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoBaseCollectionPaginationCountResponse(relationCollectionResponse),
        "value": n => { relationCollectionResponse.value = n.getCollectionOfObjectValues<Relation>(createRelationFromDiscriminatorValue); },
    }
}
