import {Entity} from '../entity';
import {ActivitySettings} from './activitySettings';
import {Configuration} from './configuration';
import {ConnectionOperation} from './connectionOperation';
import {ConnectionState} from './connectionState';
import {ExternalGroup} from './externalGroup';
import {ExternalItem} from './externalItem';
import {Schema} from './schema';
import {SearchSettings} from './searchSettings';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalConnection extends Entity, Parsable {
    /**
     * Collects configurable settings related to activities involving connector content.
     */
    activitySettings?: ActivitySettings | undefined;
    /**
     * Specifies additional application IDs that are allowed to manage the connection and to index content in the connection. Optional.
     */
    configuration?: Configuration | undefined;
    /**
     * Description of the connection displayed in the Microsoft 365 admin center. Optional.
     */
    description?: string | undefined;
    /**
     * The groups property
     */
    groups?: ExternalGroup[] | undefined;
    /**
     * The items property
     */
    items?: ExternalItem[] | undefined;
    /**
     * The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters. Required.
     */
    name?: string | undefined;
    /**
     * The operations property
     */
    operations?: ConnectionOperation[] | undefined;
    /**
     * The schema property
     */
    schema?: Schema | undefined;
    /**
     * The settings configuring the search experience for content in this connection, such as the display templates for search results.
     */
    searchSettings?: SearchSettings | undefined;
    /**
     * Indicates the current state of the connection. Possible values are: draft, ready, obsolete, limitExceeded, unknownFutureValue.
     */
    state?: ConnectionState | undefined;
}
