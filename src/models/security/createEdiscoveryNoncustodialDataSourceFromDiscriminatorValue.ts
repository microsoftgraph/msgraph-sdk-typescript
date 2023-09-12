import { deserializeIntoEdiscoveryNoncustodialDataSource } from './deserializeIntoEdiscoveryNoncustodialDataSource';
import { type EdiscoveryNoncustodialDataSource } from './index';
import { type ParseNode } from '@microsoft/kiota-abstractions';

export function createEdiscoveryNoncustodialDataSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoEdiscoveryNoncustodialDataSource;
}
