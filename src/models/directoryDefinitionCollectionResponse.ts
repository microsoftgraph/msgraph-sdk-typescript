import {BaseCollectionPaginationCountResponse} from './baseCollectionPaginationCountResponse';
import {DirectoryDefinition} from './directoryDefinition';
import {Parsable} from '@microsoft/kiota-abstractions';

export interface DirectoryDefinitionCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /** The value property */
    value?: DirectoryDefinition[] | undefined;
}
