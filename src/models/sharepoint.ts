import { type Entity } from './entity';
import { type SharepointSettings } from './sharepointSettings';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Sharepoint extends Entity, Parsable {
    /**
     * The settings property
     */
    settings?: SharepointSettings | undefined;
}
