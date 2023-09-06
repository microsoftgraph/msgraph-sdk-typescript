import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface EducationCategory extends Entity, Parsable {
    /**
     * Unique identifier for the category.
     */
    displayName?: string | undefined;
}
