import {Entity} from './entity';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ChecklistItem extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** The date and time when the checklistItem was finished. */
    checkedDateTime?: Date | undefined;
    /** The date and time when the checklistItem was created. */
    createdDateTime?: Date | undefined;
    /** Field indicating the title of checklistItem. */
    displayName?: string | undefined;
    /** State indicating whether the item is checked off or not. */
    isChecked?: boolean | undefined;
}
