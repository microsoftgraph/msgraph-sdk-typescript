import {Entity} from '../entity';
import {KeyValue} from '../keyValue';
import {Group} from './group';
import {LocalizedName} from './localizedName';
import {Relation} from './relation';
import {Term} from './term';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Set extends Entity, Parsable {
    /**
     * Children terms of set in term [store].
     */
    children?: Term[] | undefined;
    /**
     * Date and time of set creation. Read-only.
     */
    createdDateTime?: Date | undefined;
    /**
     * Description that gives details on the term usage.
     */
    description?: string | undefined;
    /**
     * Name of the set for each languageTag.
     */
    localizedNames?: LocalizedName[] | undefined;
    /**
     * The parentGroup property
     */
    parentGroup?: Group | undefined;
    /**
     * Custom properties for the set.
     */
    properties?: KeyValue[] | undefined;
    /**
     * Indicates which terms have been pinned or reused directly under the set.
     */
    relations?: Relation[] | undefined;
    /**
     * All the terms under the set.
     */
    terms?: Term[] | undefined;
}
