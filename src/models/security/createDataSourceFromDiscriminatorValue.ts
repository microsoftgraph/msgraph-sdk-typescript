import {DataSource, SiteSource, UnifiedGroupSource, UserSource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createDataSourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : DataSource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.siteSource":
                    return new SiteSource();
                case "#microsoft.graph.security.unifiedGroupSource":
                    return new UnifiedGroupSource();
                case "#microsoft.graph.security.userSource":
                    return new UserSource();
            }
        }
    }
    return new DataSource();
}
