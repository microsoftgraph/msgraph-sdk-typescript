import {Entity} from '../entity';
import {KeyValue} from '../keyValue';
import {LocalizedDescription} from './localizedDescription';
import {LocalizedLabel} from './localizedLabel';
import {Relation} from './relation';
import {Set} from './set';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Term extends Entity, Parsable {
    /**
     * Children of current term.
     */
    children?: Term[] | undefined;
    /**
     * Date and time of term creation. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * Description about term that is dependent on the languageTag.
     */
    descriptions?: LocalizedDescription[] | undefined;
    /**
     * Label metadata for a term.
     */
    labels?: LocalizedLabel[] | undefined;
    /**
     * Last date and time of term modification. Read-only.
     */
    lastModifiedDateTime?: Date | undefined;
    /**
     * Collection of properties on the term.
     */
    properties?: KeyValue[] | undefined;
    /**
     * To indicate which terms are related to the current term as either pinned or reused.
     */
    relations?: Relation[] | undefined;
    /**
     * The [set] in which the term is created.
     */
    set?: Set | undefined;
}
