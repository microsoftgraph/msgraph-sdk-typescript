import {Entity} from './entity';
import {RelationType} from './termStore/relationType';
import {Set} from './termStore/set';
import {Term} from './termStore/term';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Relation extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The from [term] of the relation. The term from which the relationship is defined. A null value would indicate the relation is directly with the [set]. */
    fromTerm?: Term | undefined;
    /** The type of relation. Possible values are: pin, reuse. */
    relationship?: RelationType | undefined;
    /** The [set] in which the relation is relevant. */
    set?: Set | undefined;
    /** The to [term] of the relation. The term to which the relationship is defined. */
    toTerm?: Term | undefined;
}
