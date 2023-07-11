import {ServiceRole} from './serviceRole';
import {UserAgent} from './userAgent';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ServiceUserAgent extends Parsable, UserAgent {
    /**
     * The role property
     */
    role?: ServiceRole | undefined;
}
