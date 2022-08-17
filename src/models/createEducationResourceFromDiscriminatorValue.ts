import {EducationExcelResource, EducationExternalResource, EducationFileResource, EducationLinkResource, EducationMediaResource, EducationPowerPointResource, EducationResource, EducationTeamsAppResource, EducationWordResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationResource {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationExcelResource":
                    return new EducationExcelResource();
                case "#microsoft.graph.educationExternalResource":
                    return new EducationExternalResource();
                case "#microsoft.graph.educationFileResource":
                    return new EducationFileResource();
                case "#microsoft.graph.educationLinkResource":
                    return new EducationLinkResource();
                case "#microsoft.graph.educationMediaResource":
                    return new EducationMediaResource();
                case "#microsoft.graph.educationPowerPointResource":
                    return new EducationPowerPointResource();
                case "#microsoft.graph.educationTeamsAppResource":
                    return new EducationTeamsAppResource();
                case "#microsoft.graph.educationWordResource":
                    return new EducationWordResource();
            }
        }
    }
    return new EducationResource();
}
