import {Windows10SecureAssessmentConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10SecureAssessmentConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) : Windows10SecureAssessmentConfiguration {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new Windows10SecureAssessmentConfiguration();
}
