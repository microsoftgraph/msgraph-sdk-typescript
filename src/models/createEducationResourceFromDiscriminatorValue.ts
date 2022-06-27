import {EducationExcelResourceImpl, EducationExternalResourceImpl, EducationFileResourceImpl, EducationLinkResourceImpl, EducationMediaResourceImpl, EducationPowerPointResourceImpl, EducationResourceImpl, EducationWordResourceImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationResourceImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationExcelResource":
                    return new EducationExcelResourceImpl();
                case "#microsoft.graph.educationExternalResource":
                    return new EducationExternalResourceImpl();
                case "#microsoft.graph.educationFileResource":
                    return new EducationFileResourceImpl();
                case "#microsoft.graph.educationLinkResource":
                    return new EducationLinkResourceImpl();
                case "#microsoft.graph.educationMediaResource":
                    return new EducationMediaResourceImpl();
                case "#microsoft.graph.educationPowerPointResource":
                    return new EducationPowerPointResourceImpl();
                case "#microsoft.graph.educationWordResource":
                    return new EducationWordResourceImpl();
            }
        }
    }
    return new EducationResourceImpl();
}
