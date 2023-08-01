import type {Entity} from './entity';
import type {InternetExplorerMode} from './internetExplorerMode';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface Edge extends Entity, Parsable {
    /**
     * A container for Internet Explorer mode resources.
     */
    internetExplorerMode?: InternetExplorerMode | undefined;
}
