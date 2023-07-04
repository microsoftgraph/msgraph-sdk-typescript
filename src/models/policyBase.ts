import {DirectoryObject} from './directoryObject';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface PolicyBase extends DirectoryObject, Parsable {
    /**
     * Description for this policy. Required.
     */
    description?: string | undefined;
    /**
     * Display name for this policy. Required.
     */
    displayName?: string | undefined;
}
