import {deserializeIntoArticleIndicator} from './deserializeIntoArticleIndicator';
import {deserializeIntoIndicator} from './deserializeIntoIndicator';
import {deserializeIntoIntelligenceProfileIndicator} from './deserializeIntoIntelligenceProfileIndicator';
import {ArticleIndicator, Indicator, IntelligenceProfileIndicator} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createIndicatorFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.security.articleIndicator":
                    return deserializeIntoArticleIndicator;
                case "#microsoft.graph.security.intelligenceProfileIndicator":
                    return deserializeIntoIntelligenceProfileIndicator;
            }
        }
    }
    return deserializeIntoIndicator;
}
