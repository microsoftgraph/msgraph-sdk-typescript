import {Entity} from './entity';
import {SharepointSettings} from './sharepointSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Sharepoint extends Entity, Parsable {
    /**
     * The settings property
     */
    settings?: SharepointSettings | undefined;
}
