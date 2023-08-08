import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import type {Relation} from './relation';
import type {RelationCollectionResponse} from './relationCollectionResponse';
import {serializeRelation} from './serializeRelation';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRelationCollectionResponse(writer: SerializationWriter, relationCollectionResponse: RelationCollectionResponse | undefined = {} as RelationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, relationCollectionResponse)
        writer.writeCollectionOfObjectValues<Relation>("value", relationCollectionResponse.value, serializeRelation);
}
