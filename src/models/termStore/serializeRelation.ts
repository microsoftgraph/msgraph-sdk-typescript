import {serializeEntity} from '../serializeEntity';
import type {Relation} from './relation';
import {RelationType} from './relationType';
import {serializeSet} from './serializeSet';
import {serializeTerm} from './serializeTerm';
import type {Set} from './set';
import type {Term} from './term';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeRelation(writer: SerializationWriter, relation: Relation | undefined = {} as Relation) : void {
        serializeEntity(writer, relation)
        writer.writeObjectValue<Term>("fromTerm", relation.fromTerm, serializeTerm);
        writer.writeEnumValue<RelationType>("relationship", relation.relationship);
        writer.writeObjectValue<Set>("set", relation.set, serializeSet);
        writer.writeObjectValue<Term>("toTerm", relation.toTerm, serializeTerm);
}
