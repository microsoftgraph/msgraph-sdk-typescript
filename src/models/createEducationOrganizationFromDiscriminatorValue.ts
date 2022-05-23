import {EducationOrganizationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationOrganizationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationOrganization":
                    return new EducationOrganizationImpl();
            }
        }
    }
    return new EducationOrganizationImpl();
}
