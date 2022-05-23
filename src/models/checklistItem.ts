import {Entity} from './entity';

export interface ChecklistItem extends Entity{
    /** The date and time when the checklistItem was finished. */
    checkedDateTime?:Date | undefined;
    /** The date and time when the checklistItem was created. */
    createdDateTime?:Date | undefined;
    /** Field indicating the title of checklistItem. */
    displayName?:string | undefined;
    /** State indicating whether the item is checked off or not. */
    isChecked?:boolean | undefined;
}
