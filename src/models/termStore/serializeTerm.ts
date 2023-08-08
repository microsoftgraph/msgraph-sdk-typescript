import type {KeyValue} from '../keyValue';
import {serializeEntity} from '../serializeEntity';
import {serializeKeyValue} from '../serializeKeyValue';
import type {LocalizedDescription} from './localizedDescription';
import type {LocalizedLabel} from './localizedLabel';
import type {Relation} from './relation';
import {serializeLocalizedDescription} from './serializeLocalizedDescription';
import {serializeLocalizedLabel} from './serializeLocalizedLabel';
import {serializeRelation} from './serializeRelation';
import {serializeSet} from './serializeSet';
import type {Set} from './set';
import type {Term} from './term';
import type {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeTerm(writer: SerializationWriter, term: Term | undefined = {} as Term) : void {
        serializeEntity(writer, term)
        writer.writeCollectionOfObjectValues<Term>("children", term.children, serializeTerm);
        writer.writeDateValue("createdDateTime", term.createdDateTime);
        writer.writeCollectionOfObjectValues<LocalizedDescription>("descriptions", term.descriptions, serializeLocalizedDescription);
        writer.writeCollectionOfObjectValues<LocalizedLabel>("labels", term.labels, serializeLocalizedLabel);
        writer.writeDateValue("lastModifiedDateTime", term.lastModifiedDateTime);
        writer.writeCollectionOfObjectValues<KeyValue>("properties", term.properties, serializeKeyValue);
        writer.writeCollectionOfObjectValues<Relation>("relations", term.relations, serializeRelation);
        writer.writeObjectValue<Set>("set", term.set, serializeSet);
}
