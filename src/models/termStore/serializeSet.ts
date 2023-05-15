import {KeyValue} from '../keyValue';
import {serializeEntity} from '../serializeEntity';
import {serializeKeyValue} from '../serializeKeyValue';
import {Group} from './group';
import {LocalizedName} from './localizedName';
import {Relation} from './relation';
import {serializeGroup} from './serializeGroup';
import {serializeLocalizedName} from './serializeLocalizedName';
import {serializeRelation} from './serializeRelation';
import {serializeTerm} from './serializeTerm';
import {Set} from './set';
import {Term} from './term';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function serializeSet(writer: SerializationWriter, set: Set | undefined = {} as Set) : void {
        serializeEntity(writer, set)
        writer.writeCollectionOfObjectValues<Term>("children", set.children, serializeTerm);
        writer.writeDateValue("createdDateTime", set.createdDateTime);
        writer.writeStringValue("description", set.description);
        writer.writeCollectionOfObjectValues<LocalizedName>("localizedNames", set.localizedNames, serializeLocalizedName);
        writer.writeObjectValue<Group>("parentGroup", set.parentGroup, serializeGroup);
        writer.writeCollectionOfObjectValues<KeyValue>("properties", set.properties, serializeKeyValue);
        writer.writeCollectionOfObjectValues<Relation>("relations", set.relations, serializeRelation);
        writer.writeCollectionOfObjectValues<Term>("terms", set.terms, serializeTerm);
}
