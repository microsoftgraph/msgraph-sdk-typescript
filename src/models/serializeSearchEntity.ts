import {SearchEntity} from './searchEntity';
import {serializeEntity} from './serializeEntity';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSearchEntity(writer: SerializationWriter, searchEntity: SearchEntity | undefined = {} as SearchEntity) : void {
        serializeEntity(writer, searchEntity)
}
