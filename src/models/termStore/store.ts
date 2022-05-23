import {Entity} from '../entity';
import {Group} from './group';
import {Set} from './set';

export interface Store extends Entity{
    /** Default language of the term store. */
    defaultLanguageTag?:string | undefined;
    /** Collection of all groups available in the term store. */
    groups?:Group[] | undefined;
    /** List of languages for the term store. */
    languageTags?:string[] | undefined;
    /** Collection of all sets available in the term store. */
    sets?:Set[] | undefined;
}
