import {EducationOutcomeImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOutcomeFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationOutcomeImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationOutcome":
                    return new EducationOutcomeImpl();
            }
        }
    }
    return new EducationOutcomeImpl();
}
