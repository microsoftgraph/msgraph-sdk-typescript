import { type Entity } from './entity';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ColumnLink extends Entity, Parsable {
    /**
     * The name of the column  in this content type.
     */
    name?: string | undefined;
}
