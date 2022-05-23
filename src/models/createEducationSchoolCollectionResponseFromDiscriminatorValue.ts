import {EducationSchoolCollectionResponseImpl} from './index';
import {ParseNode} from '@microsoft/kiota-abstractions';

export function createEducationSchoolCollectionResponseFromDiscriminatorValue(parseNode: ParseNode | undefined) : EducationSchoolCollectionResponseImpl {
    if(!parseNode) throw new Error("parseNode cannot be undefined");
    return new EducationSchoolCollectionResponseImpl();
}
