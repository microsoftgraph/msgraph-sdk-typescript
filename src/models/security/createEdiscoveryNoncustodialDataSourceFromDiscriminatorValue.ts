import {EdiscoveryNoncustodialDataSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EdiscoveryNoncustodialDataSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EdiscoveryNoncustodialDataSource();
}
