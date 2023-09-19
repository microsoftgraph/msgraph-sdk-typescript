import { type BaseCollectionPaginationCountResponse } from './baseCollectionPaginationCountResponse';
import { type IosVppApp } from './iosVppApp';
import { type Parsable } from '@microsoft/kiota-abstractions';

export interface IosVppAppCollectionResponse extends BaseCollectionPaginationCountResponse, Parsable {
    /**
     * The value property
     */
    value?: IosVppApp[] | undefined;
}
