import {Entity} from './entity';
import {KeyValue} from './keyValue';
import {Group} from './termStore/group';
import {LocalizedName} from './termStore/localizedName';
import {Relation} from './termStore/relation';
import {Term} from './termStore/term';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Set extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Children terms of set in term [store]. */
    children?: Term[] | undefined;
    /** Date and time of set creation. Read-only. */
    createdDateTime?: Date | undefined;
    /** Description giving details on the term usage. */
    description?: string | undefined;
    /** Name of the set for each languageTag. */
    localizedNames?: LocalizedName[] | undefined;
    /** The parentGroup property */
    parentGroup?: Group | undefined;
    /** Custom properties for the set. */
    properties?: KeyValue[] | undefined;
    /** Indicates which terms have been pinned or reused directly under the set. */
    relations?: Relation[] | undefined;
    /** All the terms under the set. */
    terms?: Term[] | undefined;
}
