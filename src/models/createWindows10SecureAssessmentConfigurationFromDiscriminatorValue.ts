import {Windows10SecureAssessmentConfigurationImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10SecureAssessmentConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10SecureAssessmentConfigurationImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10SecureAssessmentConfigurationImpl();
}
