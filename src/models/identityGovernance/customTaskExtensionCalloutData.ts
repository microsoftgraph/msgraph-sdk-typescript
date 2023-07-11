import {CustomExtensionData} from '../customExtensionData';
import {User} from '../user';
import {Task} from './task';
import {TaskProcessingResult} from './taskProcessingResult';
import {Workflow} from './workflow';
import {Parsable} from '@microsoft/kiota-abstractions';

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
