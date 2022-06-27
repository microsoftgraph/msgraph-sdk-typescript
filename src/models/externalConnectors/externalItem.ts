import {Entity} from '../entity';
import {Acl} from './acl';
import {ExternalItemContent} from './externalItemContent';
import {Properties} from './properties';
import {AdditionalDataHolder, Parsable} from '@microsoft/kiota-abstractions';

export interface ExternalItem extends Partial<AdditionalDataHolder>, Entity, Partial<Parsable> {
    /** An array of access control entries. Each entry specifies the access granted to a user or group. Required. */
    acl?: Acl[] | undefined;
    /** Stores additional data not described in the OpenAPI description found when deserializing. Can be used for serialization as well. */
    additionalData?: Record<string, unknown>;
    /** A plain-text  representation of the contents of the item. The text in this property is full-text indexed. Optional. */
    content?: ExternalItemContent | undefined;
    /** A property bag with the properties of the item. The properties MUST conform to the schema defined for the externalConnection. Required. */
    properties?: Properties | undefined;
}
