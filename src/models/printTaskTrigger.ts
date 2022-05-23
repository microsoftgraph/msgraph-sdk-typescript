import {Entity} from './entity';
import {PrintEvent} from './printEvent';
import {PrintTaskDefinition} from './printTaskDefinition';

export interface PrintTaskTrigger extends Entity{
    /** The definition property */
    definition?:PrintTaskDefinition | undefined;
    /** The Universal Print event that will cause a new printTask to be triggered. Valid values are described in the following table. */
    event?:PrintEvent | undefined;
}
