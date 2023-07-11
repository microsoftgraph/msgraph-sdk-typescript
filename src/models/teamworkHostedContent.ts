import {Entity} from './entity';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface TeamworkHostedContent extends Entity, Parsable {
    /**
     * Write only. Bytes for the hosted content (such as images).
     */
    contentBytes?: string | undefined;
    /**
     * Write only. Content type. sicj as image/png, image/jpg.
     */
    contentType?: string | undefined;
}
