import {deserializeIntoDataSourceContainer} from './deserializeIntoDataSourceContainer';
import {deserializeIntoEdiscoveryCustodian} from './deserializeIntoEdiscoveryCustodian';
import {deserializeIntoEdiscoveryNoncustodialDataSource} from './deserializeIntoEdiscoveryNoncustodialDataSource';
import {DataSourceContainer, EdiscoveryCustodian, EdiscoveryNoncustodialDataSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataSourceContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.ediscoveryCustodian":
                    return deserializeIntoEdiscoveryCustodian;
                case "#microsoft.graph.security.ediscoveryNoncustodialDataSource":
                    return deserializeIntoEdiscoveryNoncustodialDataSource;
            }
        }
    }
    return deserializeIntoDataSourceContainer;
}
