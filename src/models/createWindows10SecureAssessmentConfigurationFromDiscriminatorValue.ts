import {deserializeIntoWindows10SecureAssessmentConfiguration} from './deserializeIntoWindows10SecureAssessmentConfiguration';
import {Windows10SecureAssessmentConfiguration} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createWindows10SecureAssessmentConfigurationFromDiscriminatorValue(parseNode: ParseNode | undefined) {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return deserializeIntoWindows10SecureAssessmentConfiguration;
}
