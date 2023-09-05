import { deserializeIntoEntity } from '../deserializeIntoEntity';
import { createSetFromDiscriminatorValue } from './createSetFromDiscriminatorValue';
import { createTermFromDiscriminatorValue } from './createTermFromDiscriminatorValue';
import { type Relation } from './relation';
import { RelationType } from './relationType';
import { serializeSet } from './serializeSet';
import { serializeTerm } from './serializeTerm';
import { type Set } from './set';
import { type Term } from './term';
import { type Parsable, type ParseNode, type SerializationWriter } from '@microsoft/kiota-abstractions';

export function deserializeIntoRelation(relation: Relation | undefined = {} as Relation) : Record<string, (node: ParseNode) => void> {
    return {
        ...deserializeIntoEntity(relation),
        "fromTerm": n => { relation.fromTerm = n.getObjectValue<Term>(createTermFromDiscriminatorValue); },
        "relationship": n => { relation.relationship = n.getEnumValue<RelationType>(RelationType); },
        "set": n => { relation.set = n.getObjectValue<Set>(createSetFromDiscriminatorValue); },
        "toTerm": n => { relation.toTerm = n.getObjectValue<Term>(createTermFromDiscriminatorValue); },
    }
}
