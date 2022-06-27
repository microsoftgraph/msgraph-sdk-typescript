import {Entity} from '../entity';
import {Group} from './group';
import {Set} from './set';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface Store extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** Default language of the term store. */
    defaultLanguageTag?: string | undefined;
    /** Collection of all groups available in the term store. */
    groups?: Group[] | undefined;
    /** List of languages for the term store. */
    languageTags?: string[] | undefined;
    /** Collection of all sets available in the term store. */
    sets?: Set[] | undefined;
}
