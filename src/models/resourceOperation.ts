import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ResourceOperation extends Entity, Parsable {
    /**
     * Type of action this operation is going to perform. The actionName should be concise and limited to as few words as possible.
     */
    actionName?: string | undefined;
    /**
     * Description of the resource operation. The description is used in mouse-over text for the operation when shown in the Azure Portal.
     */
    description?: string | undefined;
    /**
     * Name of the Resource this operation is performed on.
     */
    resourceName?: string | undefined;
}
