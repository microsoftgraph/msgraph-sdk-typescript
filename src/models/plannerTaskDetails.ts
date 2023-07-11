import {Entity} from './entity';
import {PlannerChecklistItems} from './plannerChecklistItems';
import {PlannerExternalReferences} from './plannerExternalReferences';
import {PlannerPreviewType} from './plannerPreviewType';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PlannerTaskDetails extends Entity, Parsable {
    /**
     * The collection of checklist items on the task.
     */
    checklist?: PlannerChecklistItems | undefined;
    /**
     * Description of the task.
     */
    description?: string | undefined;
    /**
     * This sets the type of preview that shows up on the task. The possible values are: automatic, noPreview, checklist, description, reference. When set to automatic the displayed preview is chosen by the app viewing the task.
     */
    previewType?: PlannerPreviewType | undefined;
    /**
     * The collection of references on the task.
     */
    references?: PlannerExternalReferences | undefined;
}
