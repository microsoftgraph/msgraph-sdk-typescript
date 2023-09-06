import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type DirectoryDefinition } from './directoryDefinition';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface DirectoryDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: DirectoryDefinition[] | undefined;
}
