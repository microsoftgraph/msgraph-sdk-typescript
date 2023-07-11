import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface OnenoteEntityBaseModel extends Entity, Parsable {
    /**
     * The endpoint where you can get details about the page. Read-only.
     */
    self?: string | undefined;
}
