import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface EducationCategory extends Entity, Parsable {
    /**
     * Unique identifier for the category.
     */
    displayName?: string | undefined;
}
