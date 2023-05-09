import {createKeyValueFromDiscriminatorValue} from '../createKeyValueFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {KeyValue} from '../keyValue';
import {serializeKeyValue} from '../serializeKeyValue';
import {createGroupFromDiscriminatorValue} from './createGroupFromDiscriminatorValue';
import {createLocalizedNameFromDiscriminatorValue} from './createLocalizedNameFromDiscriminatorValue';
import {createRelationFromDiscriminatorValue} from './createRelationFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './createTermFromDiscriminatorValue';
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

export function deserializeIntoSet(set: Set | undefined = {} as Set) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(set),
        "children": n => { set.children = n.getCollectionOfObjectValues<Term>(createTermFromDiscriminatorValue); },
        "createdDateTime": n => { set.createdDateTime = n.getDateValue(); },
        "description": n => { set.description = n.getStringValue(); },
        "localizedNames": n => { set.localizedNames = n.getCollectionOfObjectValues<LocalizedName>(createLocalizedNameFromDiscriminatorValue); },
        "parentGroup": n => { set.parentGroup = n.getObjectValue<Group>(createGroupFromDiscriminatorValue); },
        "properties": n => { set.properties = n.getCollectionOfObjectValues<KeyValue>(createKeyValueFromDiscriminatorValue); },
        "relations": n => { set.relations = n.getCollectionOfObjectValues<Relation>(createRelationFromDiscriminatorValue); },
        "terms": n => { set.terms = n.getCollectionOfObjectValues<Term>(createTermFromDiscriminatorValue); },
    }
}
