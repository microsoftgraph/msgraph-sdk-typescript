import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type CustomSecurityAttributeDefinition } from './customSecurityAttributeDefinition';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface CustomSecurityAttributeDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CustomSecurityAttributeDefinition[] | undefined;
}
