import {BaseCollectionPaginationCountResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createBaseCollectionPaginationCountResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : BaseCollectionPaginationCountResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new BaseCollectionPaginationCountResponse();
}
