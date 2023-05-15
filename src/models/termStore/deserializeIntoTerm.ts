import {createKeyValueFromDiscriminatorValue} from '../createKeyValueFromDiscriminatorValue';
import {deserializeIntoEntity} from '../deserializeIntoEntity';
import {KeyValue} from '../keyValue';
import {serializeKeyValue} from '../serializeKeyValue';
import {createLocalizedDescriptionFromDiscriminatorValue} from './createLocalizedDescriptionFromDiscriminatorValue';
import {createLocalizedLabelFromDiscriminatorValue} from './createLocalizedLabelFromDiscriminatorValue';
import {createRelationFromDiscriminatorValue} from './createRelationFromDiscriminatorValue';
import {createSetFromDiscriminatorValue} from './createSetFromDiscriminatorValue';
import {createTermFromDiscriminatorValue} from './createTermFromDiscriminatorValue';
import {LocalizedDescription} from './localizedDescription';
import {LocalizedLabel} from './localizedLabel';
import {Relation} from './relation';
import {serializeLocalizedDescription} from './serializeLocalizedDescription';
import {serializeLocalizedLabel} from './serializeLocalizedLabel';
import {serializeRelation} from './serializeRelation';
import {serializeSet} from './serializeSet';
import {serializeTerm} from './serializeTerm';
import {Set} from './set';
import {Term} from './term';
import {Parsable, ParseNode, SerializationWriter} from '@microsoft/kiota-abstractions';

export function deserializeIntoTerm(term: Term | undefined = {} as Term) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(term),
        "children": n => { term.children = n.getCollectionOfObjectValues<Term>(createTermFromDiscriminatorValue); },
        "createdDateTime": n => { term.createdDateTime = n.getDateValue(); },
        "descriptions": n => { term.descriptions = n.getCollectionOfObjectValues<LocalizedDescription>(createLocalizedDescriptionFromDiscriminatorValue); },
        "labels": n => { term.labels = n.getCollectionOfObjectValues<LocalizedLabel>(createLocalizedLabelFromDiscriminatorValue); },
        "lastModifiedDateTime": n => { term.lastModifiedDateTime = n.getDateValue(); },
        "properties": n => { term.properties = n.getCollectionOfObjectValues<KeyValue>(createKeyValueFromDiscriminatorValue); },
        "relations": n => { term.relations = n.getCollectionOfObjectValues<Relation>(createRelationFromDiscriminatorValue); },
        "set": n => { term.set = n.getObjectValue<Set>(createSetFromDiscriminatorValue); },
    }
}
