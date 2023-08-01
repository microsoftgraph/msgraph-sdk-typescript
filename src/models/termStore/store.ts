import type {Entity} from '../entity';
import type {Group} from './group';
import type {Set} from './set';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Store extends Entity, Parsable {
    /**
     * Default language of the term store.
     */
    defaultLanguageTag?: string | undefined;
    /**
     * Collection of all groups available in the term store.
     */
    groups?: Group[] | undefined;
    /**
     * List of languages for the term store.
     */
    languageTags?: string[] | undefined;
    /**
     * Collection of all sets available in the term store. This relationship can only be used to load a specific term set.
     */
    sets?: Set[] | undefined;
}
