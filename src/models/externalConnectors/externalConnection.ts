import {Entity} from '../entity';
import {Configuration} from './configuration';
import {ConnectionOperation} from './connectionOperation';
import {ConnectionState} from './connectionState';
import {ExternalGroup} from './externalGroup';
import {ExternalItem} from './externalItem';
import {Schema} from './schema';

export interface ExternalConnection extends Entity{
    /** Specifies additional application IDs that are allowed to manage the connection and to index content in the connection. Optional. */
    configuration?:Configuration | undefined;
    /** Description of the connection displayed in the Microsoft 365 admin center. Optional. */
    description?:string | undefined;
    /** Read-only. Nullable. */
    groups?:ExternalGroup[] | undefined;
    /** Read-only. Nullable. */
    items?:ExternalItem[] | undefined;
    /** The display name of the connection to be displayed in the Microsoft 365 admin center. Maximum length of 128 characters. Required. */
    name?:string | undefined;
    /** Read-only. Nullable. */
    operations?:ConnectionOperation[] | undefined;
    /** Read-only. Nullable. */
    schema?:Schema | undefined;
    /** Indicates the current state of the connection. Possible values are draft, ready, obsolete, and limitExceeded. Required. */
    state?:ConnectionState | undefined;
}
