import {deserializeIntoInsightValueDouble} from './deserializeIntoInsightValueDouble';
import {deserializeIntoInsightValueInt} from './deserializeIntoInsightValueInt';
import {deserializeIntoUserExperienceAnalyticsInsightValue} from './deserializeIntoUserExperienceAnalyticsInsightValue';
import {InsightValueDouble, InsightValueInt, UserExperienceAnalyticsInsightValue} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createUserExperienceAnalyticsInsightValueFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.insightValueDouble":
                    return deserializeIntoInsightValueDouble;
                case "#microsoft.graph.insightValueInt":
                    return deserializeIntoInsightValueInt;
            }
        }
    }
    return deserializeIntoUserExperienceAnalyticsInsightValue;
}
