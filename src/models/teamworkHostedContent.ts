import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkHostedContent extends Entity, Partial<Parsable> {
    /** Write only. Bytes for the hosted content (such as images). */
    contentBytes?: string | undefined;
    /** Write only. Content type, such as image/png, image/jpg. */
    contentType?: string | undefined;
}
