import {Entity} from '../entity';
import {Acl} from './acl';
import {ExternalItemContent} from './externalItemContent';
import {Properties} from './properties';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalItem extends Entity, Parsable {
    /** An array of access control entries. Each entry specifies the access granted to a user or group. Required. */
    acl?: Acl[] | undefined;
    /** A plain-text  representation of the contents of the item. The text in this property is full-text indexed. Optional. */
    content?: ExternalItemContent | undefined;
    /** A property bag with the properties of the item. The properties MUST conform to the schema defined for the externalConnection. Required. */
    properties?: Properties | undefined;
}
