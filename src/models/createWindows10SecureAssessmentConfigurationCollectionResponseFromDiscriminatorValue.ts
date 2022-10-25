import {Windows10SecureAssessmentConfigurationCollectionResponse} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10SecureAssessmentConfigurationCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10SecureAssessmentConfigurationCollectionResponse {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10SecureAssessmentConfigurationCollectionResponse();
}
