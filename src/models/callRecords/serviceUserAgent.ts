import { ServiceRole } from './serviceRole';
import { type UserAgent } from './userAgent';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface ServiceUserAgent extends Parsable, UserAgent {
    /**
     * The role property
     */
    role?: ServiceRole | undefined;
}
