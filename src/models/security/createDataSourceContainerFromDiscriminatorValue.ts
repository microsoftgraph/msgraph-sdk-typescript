import {DataSourceContainer, EdiscoveryCustodian, EdiscoveryNoncustodialDataSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataSourceContainerFromDiscriminatorValue(parseNode: ParseNode | undefined) : DataSourceContainer {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.ediscoveryCustodian":
                    return new EdiscoveryCustodian();
                case "#microsoft.graph.security.ediscoveryNoncustodialDataSource":
                    return new EdiscoveryNoncustodialDataSource();
            }
        }
    }
    return new DataSourceContainer();
}
