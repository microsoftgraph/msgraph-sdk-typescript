import type {Entity} from '../entity';
import {RelationType} from './relationType';
import type {Set} from './set';
import type {Term} from './term';
import type {Parsable} from '@microsoft/kiota-abstractions';

export interface Relation extends Entity, Parsable {
    /**
     * The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set].
     */
    fromTerm?: Term | undefined;
    /**
     * The type of relation. Possible values are: pin, reuse.
     */
    relationship?: RelationType | undefined;
    /**
     * The [set] in which the relation is relevant.
     */
    set?: Set | undefined;
    /**
     * The to [term] of the relation. The term to which the relationship is defined.
     */
    toTerm?: Term | undefined;
}
