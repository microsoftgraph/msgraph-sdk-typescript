import { type CustomExtensionData } from '../customExtensionData';
import { type User } from '../user';
import { type Task } from './task';
import { type TaskProcessingResult } from './taskProcessingResult';
import { type Workflow } from './workflow';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CustomTaskExtensionCalloutData extends CustomExtensionData, Parsable {
    /**
     * The subject property
     */
    subject?: User | undefined;
    /**
     * The task property
     */
    task?: Task | undefined;
    /**
     * The taskProcessingresult property
     */
    taskProcessingresult?: TaskProcessingResult | undefined;
    /**
     * The workflow property
     */
    workflow?: Workflow | undefined;
}
