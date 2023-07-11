import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {CustomSecurityAttributeDefinition} from './customSecurityAttributeDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface CustomSecurityAttributeDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: CustomSecurityAttributeDefinition[] | undefined;
}
