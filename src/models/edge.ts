import { type Entity } from './entity';
import { type InternetExplorerMode } from './internetExplorerMode';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface Edge extends Entity, Parsable {
    /**
     * A container for Internet Explorer mode resources.
     */
    internetExplorerMode?: InternetExplorerMode | undefined;
}
