import {deserializeIntoEducationOrganization} from './deserializeIntoEducationOrganization';
import {deserializeIntoEducationSchool} from './deserializeIntoEducationSchool';
import {EducationOrganization, EducationSchool} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationOrganizationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationSchool":
                    return deserializeIntoEducationSchool;
            }
        }
    }
    return deserializeIntoEducationOrganization;
}
