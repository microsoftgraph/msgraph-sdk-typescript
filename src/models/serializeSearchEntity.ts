import { type SearchEntity } from './searchEntity';
import { serializeEntity } from './serializeEntity';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function serializeSearchEntity(writer: SerializationWriter, searchEntity: SearchEntity | undefined = {} as SearchEntity) : void {
        serializeEntity(writer, searchEntity)
}
