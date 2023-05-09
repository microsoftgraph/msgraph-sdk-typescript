import {deserializeIntoDataSource} from './deserializeIntoDataSource';
import {deserializeIntoSiteSource} from './deserializeIntoSiteSource';
import {deserializeIntoUnifiedGroupSource} from './deserializeIntoUnifiedGroupSource';
import {deserializeIntoUserSource} from './deserializeIntoUserSource';
import {DataSource, SiteSource, UnifiedGroupSource, UserSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.siteSource":
                    return deserializeIntoSiteSource;
                case "#microsoft.graph.security.unifiedGroupSource":
                    return deserializeIntoUnifiedGroupSource;
                case "#microsoft.graph.security.userSource":
                    return deserializeIntoUserSource;
            }
        }
    }
    return deserializeIntoDataSource;
}
