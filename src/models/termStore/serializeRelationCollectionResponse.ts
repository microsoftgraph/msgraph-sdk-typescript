import {serializeBaseCollectionPaginationCountResponse} from '../serializeBaseCollectionPaginationCountResponse';
import {Relation} from './relation';
import {RelationCollectionResponse} from './relationCollectionResponse';
import {serializeRelation} from './serializeRelation';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRelationCollectionResponse(writer: SerializationWriter, relationCollectionResponse: RelationCollectionResponse | undefined = {} as RelationCollectionResponse) : void {
        serializeBaseCollectionPaginationCountResponse(writer, relationCollectionResponse)
        writer.writeCollectionOfObjectValues<Relation>("value", relationCollectionResponse.value, serializeRelation);
}
