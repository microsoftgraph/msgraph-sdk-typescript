import {deserializeIntoEducationExcelResource} from './deserializeIntoEducationExcelResource';
import {deserializeIntoEducationExternalResource} from './deserializeIntoEducationExternalResource';
import {deserializeIntoEducationFileResource} from './deserializeIntoEducationFileResource';
import {deserializeIntoEducationLinkResource} from './deserializeIntoEducationLinkResource';
import {deserializeIntoEducationMediaResource} from './deserializeIntoEducationMediaResource';
import {deserializeIntoEducationPowerPointResource} from './deserializeIntoEducationPowerPointResource';
import {deserializeIntoEducationResource} from './deserializeIntoEducationResource';
import {deserializeIntoEducationTeamsAppResource} from './deserializeIntoEducationTeamsAppResource';
import {deserializeIntoEducationWordResource} from './deserializeIntoEducationWordResource';
import {EducationExcelResource, EducationExternalResource, EducationFileResource, EducationLinkResource, EducationMediaResource, EducationPowerPointResource, EducationResource, EducationTeamsAppResource, EducationWordResource} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationResourceFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    const mappingValueNode = parseNode.getChildNode("@odata.type");
    if (mappingValueNode) {
        const mappingValue = mappingValueNode.getStringValue();
        if (mappingValue) {
            switch (mappingValue) {
                case "#microsoft.graph.educationExcelResource":
                    return deserializeIntoEducationExcelResource;
                case "#microsoft.graph.educationExternalResource":
                    return deserializeIntoEducationExternalResource;
                case "#microsoft.graph.educationFileResource":
                    return deserializeIntoEducationFileResource;
                case "#microsoft.graph.educationLinkResource":
                    return deserializeIntoEducationLinkResource;
                case "#microsoft.graph.educationMediaResource":
                    return deserializeIntoEducationMediaResource;
                case "#microsoft.graph.educationPowerPointResource":
                    return deserializeIntoEducationPowerPointResource;
                case "#microsoft.graph.educationTeamsAppResource":
                    return deserializeIntoEducationTeamsAppResource;
                case "#microsoft.graph.educationWordResource":
                    return deserializeIntoEducationWordResource;
            }
        }
    }
    return deserializeIntoEducationResource;
}
